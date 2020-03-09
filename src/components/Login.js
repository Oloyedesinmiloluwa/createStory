import React, {useState} from 'react';
import Button from './Button';
import './login.scss';
import { useDispatch } from 'react-redux';
import {login} from '../actions/loginAction';
import Loader from './Loader';
import { validateLogin } from '../validation';
import Input from './Input';
import Body from './Body';
import Notify from './Notify';

const Login = ({history}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	const [error, setError] = useState({});
	const [apiError, setApiError] = useState({});
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		const errorObject = validateLogin({email, password})
		if(Object.keys(errorObject).length){
			
			setError(errorObject);
			return;
		}
		setLoading(true);
		dispatch(login({email, password}, isAdmin))
		.then((res) => {
			setLoading(false);
			console.log(res)
			res.data.userRoles[0] === 'Admin' 
			? history.push('/stories')
			: history.push('/story/new');
		})
		.catch(err => {
			setLoading(false);
			if(!err.response){
				return setApiError({message: 'You seem to have a problem with your internet'})
			}
			setApiError({message: err.response.data && err.response.data.message})
		});
	}
	const handleToggle = (e) => {
		e.target.checked ?	setIsAdmin(true) : setIsAdmin(false);	
	}


	return (
		<>
		<Notify handleCancel={()=>setApiError({})} notify={!!Object.keys(apiError).length}>{apiError.message}</Notify>
		<div className="login">
			{!!error.length && <ul>{error.map(item => <li>{item}</li>)}</ul>}
			<Body>
				<Input 
					type="email" 
					label="Email"
					value={email}
					onChange={(e)=>setEmail(e.target.value)}
					id="email"
					errorText={error.email}
				/>
				<Input
					type="password"
					label="Password"
					value={password}
					onChange={(e)=>setPassword(e.target.value)}
					id="password"
					errorText={error.password}
				/>
				<div className="checkbox">
					<input type="checkbox" value={isAdmin} onChange={handleToggle} id="checkbox" />
					<label htmlFor="checkbox">Login as Admin</label>
				</div>
				<Button onClick={handleSubmit}>Submit {loading && <Loader />}</Button>
			</Body>
		</div>
		</>
	)
}

export default Login
