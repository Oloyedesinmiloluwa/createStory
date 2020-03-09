import React, { useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './createStory.scss';
import StoryBody from '../components/StoryBody';
import {getStories, updateStoryStatus} from '../actions/storyAction';
import HeaderContainer from '../components/HeaderContainer';
import Notify from '../components/Notify';

const ReviewStory = (props) => {
	const [apiError, setApiError] = useState({});
	let story = useSelector(state => state.stories.find(story => story.id === parseInt(props.match.params.storyId,10)));
	story = story || {};
	let user = useSelector(state=>state.user);
	let isAdmin = user.userRoles && user.userRoles[0] === 'Admin' ? true : props.history.push('/stories');
	const dispatch = useDispatch();
	useEffect(() => {
		if(!story.id){
		dispatch(getStories());
		}
	}, [story, dispatch])
	const handleReview = (e)=> {
		dispatch(updateStoryStatus(story, e.target.id)).then(res => {
			props.history.push('/stories');
		})
		.catch(err => {
			if(!err.response){
				return setApiError({message: 'You seem to have a problem with your internet'})
			}
			setApiError({message: err.response.data && err.response.data.message})
		})
	}
	return (
		<>
		<Notify handleCancel={()=>setApiError({})} notify={!!Object.keys(apiError).length}>{apiError.message}</Notify>
		<HeaderContainer {...props} />
		<div style={{marginTop: '90px'}}>
			<h1 style={{textAlign: 'center'}}>Review Story</h1>
			<StoryBody
				disabled
				story={story}
				history={props.history}
				isAdmin={isAdmin}
				handleReview={handleReview}
			/>
		</div>
		</>
	)
}

export default ReviewStory
