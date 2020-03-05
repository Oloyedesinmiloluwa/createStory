import { combineReducers } from 'redux';
import {currentStory, stories} from './storiesReducer';
import user from './userReducer';

export default combineReducers({
	currentStory,
	stories,
	user
});
