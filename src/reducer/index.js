import { combineReducers } from 'redux';
import {currentStory, stories} from './storiesReducer';

export default combineReducers({
	currentStory,
	stories
});
