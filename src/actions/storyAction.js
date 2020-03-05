import axios from "axios"
import constants from '../constants/story';


const getStoriesAction = (story) => ({
	type: constants.GET_STORIES_SUCCESS,
	story
});
const baseUrl = process.env.REACT_APP_BASE_URL;
export const getStories = () => dispatch => {
	return axios(`${baseUrl}/api/getStories`, {
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
	.catch(error => alert('Error Ocurred:', error));
}
const createStoryAction = (story)=> ({story});
export const createStory = (data) => dispatch => {
	const story = JSON.stringify(data);
	return axios.post(`${baseUrl}/api/createStories`, story)
	.then(res => {
		if (res.statusText === 'OK') {
			dispatch(createStoryAction(res.data))
		}
	})
	.catch(err => alert('Error Ocurred:', err)); // consider removing or improving
}
export const updateStory = (story) => dispatch => {
	return (Promise.resolve(
	dispatch({
		type: constants.UPDATE_CURRENT_STORY_SUCCESS,
		story
	})		
	));
	
	/* axios()
	.then(res => {
		if (res.statusText === 'OK') {
		}
	})
	.catch(err => alert('Error Ocurred:', err)); */
}
