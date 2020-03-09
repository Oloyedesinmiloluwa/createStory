import constants from '../constants/story';
import api from "./api";

const getStoriesAction = (stories) => ({
	type: constants.GET_STORIES_SUCCESS,
	stories
});
export const getStories = () => dispatch => {
	return api('/api/getStories', {
		headers: {
			'Accept': 'application/json'
		}
	})
	.then(res => {
		console.log(res)
		if (res.statusText === 'OK') {
			dispatch(getStoriesAction(res.data))
		}
		return res.data;
	})
}
const createStoryAction = (story)=> ({type: constants.CREATE_STORY_SUCCESS, story});
export const createStory = (data) => dispatch => {
	const story = JSON.stringify(data);
	return api.post(`/api/createStories`, story,{headers: {'content-type': 'application/json'}})
	.then(res => {
		if (res.statusText === 'Created') {
			dispatch(createStoryAction(res.data))
		}
		return res.data;
	})
}
export const updateStoryStatus = (story,status) => dispatch => {
	let url = `/api/stories/${story.id}/`;
	if (status === 'accepted'){
		url += 'approve'
	} else if(status === 'rejected'){
		url += 'reject'
	}
	return api.put(url)
	.then(res => {
		if(res.status === 200){
			dispatch({
				type: constants.UPDATE_CURRENT_STORY_SUCCESS,
				story: res.data
			})
		}
		return res.data;
	})
	
	
	}
