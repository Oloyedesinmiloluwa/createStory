import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './views/Login';
import NotFound from './components/NotFound';
import CreateStory from './views/CreateStory';
import StoryListPage from './views/StoryListPage';
import ReviewStory from './views/ReviewStory';
import AuthRoute from './components/AuthRoute';
import { useSelector } from 'react-redux';

const AppRouter = (props) => {
	let user = useSelector(state => state.user);
	// debugger
	return(
	<Router>
		<Switch>
			{/*Review the next line*/}
			<Route path="/" component={Login} exact/>
			<Route path="/login" component={Login} />
			{/* isloggedin true for now */}
			<AuthRoute {...props} path="/story/new" component={CreateStory} isLoggedIn={true || (user && user.isLoggedIn)} />
			{/* <Route path="/story/new" component={CreateStory} /> */}
			<Route path="/stories" component={StoryListPage} exact/>
			<Route path="/stories/:storyId/review" component={ReviewStory} />
			<Route component={NotFound} />
		</Switch>
	</Router>)
}
export default AppRouter;
