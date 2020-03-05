import React from 'react'
import {Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
const AuthRoute = ({component: Component, isLoggedIn, ...restProps}) => {
	return (
		<Route {...restProps} render={props => (isLoggedIn ? <Component {...props} />: <Redirect to={{pathname: '/login', state: {from: props.location}}}/>)} />
	)
}

export default AuthRoute
