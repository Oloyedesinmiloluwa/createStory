import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import StoryList from '../components/StoryList';
import {getStories} from '../actions/storyAction';
import './storyListPage.scss';
import HeaderContainer from '../components/HeaderContainer';
import Notify from '../components/Notify';

/* const stories = [
	{
		summary: 'create login page',
		description: 'It all starts with a login page, so let us start',
		cost: '$120',
		type: 'enhancement',
		complexity: 'mid',
		estimatedHrs: '1',
		status: 'accepted'
	}
] */

const StoryListPage = (props) => {
	const [apiError, setApiError] = useState({});
	const dispatch = useDispatch();
	const stories = useSelector((state) => state.stories);
	let user = useSelector(state=>state.user);
	const isAdmin = user.userRoles && user.userRoles[0] === 'Admin' ? true : false;

	useEffect(()=> {
		if(!stories.length){
			dispatch(getStories())
				.catch(err => {
					if(!err.response){
						return setApiError({message: 'You seem to have a problem with your internet'})
					}
					setApiError({message: err.response.data && err.response.data.message})
				});
		}
	},[])
	const handleRowClick = (e,id) => {
		if(isAdmin){
			props.history.push(`/stories/${id}/review`)
		}
	}
	return (
		<>
		<Notify handleCancel={()=>setApiError({})} notify={!!Object.keys(apiError).length}>{apiError.message}</Notify>
		<HeaderContainer {...props} />
		<div className="story-list-page">
			<h1>Stories</h1>
			<div>
				<StoryList
					stories={stories}
					handleRowClick={handleRowClick}
				/>
			</div>
		</div>
		</>
	)
}

export default StoryListPage
