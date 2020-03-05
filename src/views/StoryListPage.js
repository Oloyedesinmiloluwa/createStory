import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import StoryList from '../components/StoryList';
import {getStories} from '../actions/storyAction';
import './storyListPage.scss';

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

const StoryListPage = () => {
	const dispatch = useDispatch();
	const stories = useSelector((state) => state.stories);
	useEffect(()=> {
		if(!stories.length){
			dispatch(getStories());
		}
	}, [stories, dispatch])
	return (
		<div className="story-list-page">
			<h1>Stories</h1>
			<div>
				<StoryList
					stories={stories}
					isAdmin={true}
				/>
			</div>
		</div>
	)
}

export default StoryListPage
