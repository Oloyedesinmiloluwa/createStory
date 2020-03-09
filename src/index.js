import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Router from './Router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import initialState from './store/initialState';
import jwtDecode from 'jwt-decode';
import {createUser} from './actions/loginAction';
import { setAuthorizationHeader } from './actions/api';

const store = configureStore(initialState);
const token = localStorage.getItem('wecreate-token');
if (token) {
	setAuthorizationHeader(token);
	const {iat, exp, ...userData} = jwtDecode(token);
	store.dispatch(createUser(userData))
}
const App = () => {
	return (
	<Provider store={store}>
		<Router />
	</Provider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
