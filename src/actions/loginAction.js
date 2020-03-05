import axios from "axios"
import constant from '../constants/login'
const baseUrl = process.env.REACT_APP_BASE_URL;

const createUser = (user) => ({
	type: constant.LOGIN_SUCCESS,
	user
})
export const login = (data, isAdmin) => dispatch => {
	const user = JSON.stringify(data);
	const url = isAdmin ? 'api/admin-login' : 'api/login';
	return axios.post(`${baseUrl}/${url}`, user, {
		headers: {
			'Content-Type': 'Application/json'
		}
	})
	.then(res => {
		if (res.status === 200) {
			// debugger
			dispatch(createUser(res.data))
			console.log(res)
			return res.data;
		}
	})
}
