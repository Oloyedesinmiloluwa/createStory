import constants from '../constants/story';
const updateStory = (state, id) => {
	return {...state.splice(id,1)[0], status: id}
}
export const currentStory = (state={}, action) => {
	switch(action.type){
		case '':
			return {}
		default:
			return state;
	}
}

export const stories = (state=[], action) => {
	switch(action.type){
		case constants.GET_STORIES_SUCCESS:
			return [...action.story]
		case constants.UPDATE_CURRENT_STORY_SUCCESS:
			return [...state.filter(story => story.id !== action.story.id), action.story]
			// return [...state.splice(action.story.id,1,action.story)]
			// return [...state,{...state.filter(story => story.id === action.id), status: action.status}]
		
		default:
			return state;
	}
}

/* export const updateStory = (state={}, action) => {
	switch(action.type){
		case constants.UPDATE_CURRENT_STORY_SUCCESS:
			{
			return [...action.story]

			}
		default:
			return state;
	}
} */
