import React, { useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './createStory.scss';
import StoryBody from '../components/StoryBody';
import {getStories, updateStory} from '../actions/storyAction';

const ReviewStory = (props) => {
	let story = useSelector(state => state.stories.find(story => story.id === parseInt(props.match.params.storyId,10)));
	story = story || {};
	let user = useSelector(state=>state.user);
	let isAdmin = user.userRoles ? user.userRoles[0] === 'Admin': true;//temporarily true
	const dispatch = useDispatch();
	useEffect(() => {
		if(!story.id){
		dispatch(getStories());
		}
	}, [story, dispatch])
	const handleReview = (e)=> {
		dispatch(updateStory({...story, status: e.target.id})).then(res => {
			props.history.push('/stories');
		})
	}
	return (
		<div>
			<h1 style={{textAlign: 'center'}}>Review Story</h1>
			<StoryBody
				disabled
				story={story}
				history={props.history}
				isAdmin={isAdmin}
				handleReview={handleReview}
			/>
		</div>
	)
}

export default ReviewStory
