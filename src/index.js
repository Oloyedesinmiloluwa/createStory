import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import initialState from './store/initialState';

const store = configureStore(initialState);
const App = () => {
	return (
	<Provider store={store}>
		<Router />
	</Provider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
