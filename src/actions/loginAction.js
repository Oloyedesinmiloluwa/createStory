import constant from '../constants/login'
import api, { setAuthorizationHeader } from './api';

export const createUser = (user) => ({
	type: constant.LOGIN_SUCCESS,
	user
})
export const login = (data, isAdmin) => dispatch => {
	const user = JSON.stringify(data);
	const url = isAdmin ? '/api/admin-login' : '/api/login';
	return api.post(url, user, {
		headers: {
			'Content-Type': 'Application/json'
		}
	})
	.then(res => {
		if (res.status === 200) {
			const {token, ...userData} = res.data;
			dispatch(createUser(userData))

			// make token available in the axios instance
			setAuthorizationHeader(token);
			localStorage.setItem('wecreate-token',token);
			return res;
		}
	});
}
export const signup = (data) => dispatch => {
	const user = JSON.stringify(data);
	const url = '/api/signup';
	return api.post(url, user, {
		headers: {
			'Content-Type': 'Application/json'
		}
	})
}
