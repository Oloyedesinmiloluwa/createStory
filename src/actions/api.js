import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	timeout: 10000
});
export const setAuthorizationHeader = (token) => {
	const defaultHeader = instance.defaults.headers.common;
	if(token){
		defaultHeader['Authorization'] = `Bearer ${token}`;
	}
	return defaultHeader;
}
export default instance;
