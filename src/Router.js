import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './views/Login';
import NotFound from './components/NotFound';
import CreateStory from './views/CreateStory';
import StoryListPage from './views/StoryListPage';
import ReviewStory from './views/ReviewStory';
import AuthRoute from './components/AuthRoute';
import { useSelector } from 'react-redux';
import Signup from './components/Signup';

const AppRouter = (props) => {
	let user = useSelector(state => state.user);
	return(
	<Router>
		<Switch>
			<Route path="/" component={Login} exact/>
			<Route path="/login" component={Login} />
			<Route path="/signup" component={Signup} />
			<AuthRoute {...props} path="/story/new" component={CreateStory} isLoggedIn={user && user.isLoggedIn} />
			<AuthRoute {...props} path="/stories" component={StoryListPage} isLoggedIn={user && user.isLoggedIn} exact/>
			<AuthRoute {...props} path="/stories/:storyId/review" component={ReviewStory} isLoggedIn={user && user.isLoggedIn} />
			<Route component={NotFound} />
		</Switch>
	</Router>)
}
export default AppRouter;
