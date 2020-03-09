import constants from '../constants/story';

export const currentStory = (state={}, action) => {
	switch(action.type){
		case '':
			return state;
		default:
			return state;
	}
}

export const stories = (state=[], action) => {
	switch(action.type){
		case constants.GET_STORIES_SUCCESS:
			return [...action.stories]
		case constants.UPDATE_CURRENT_STORY_SUCCESS:
			return [action.story,...state.filter(story => story.id !== action.story.id)]
		case constants.CREATE_STORY_SUCCESS:
			return [action.story,...state]
		default:
			return state;
	}
}
