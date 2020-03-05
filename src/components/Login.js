import React, {useState} from 'react';
import Button from './Button';
import './login.scss';
import { useDispatch } from 'react-redux';
import {login} from '../actions/loginAction';
import Loader from './Loader';
import { validateLogin } from '../validation';
import Input from './Input';
import Body from './Body';

const Login = ({history}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	const [error, setError] = useState([]);
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		const errorList = validateLogin({email, password})
		if(errorList.length){
			
			setError([...errorList]);
			return;
		}
		setLoading(true);
		dispatch(login({email, password}, isAdmin))
		.then((res) => {
			setLoading(false);
			// debugger
			console.log(res)
			res.userRoles[0] === 'Admin' 
			? history.push('/stories')
			: history.push('/story/new');
		})
		.catch(err => {
			alert('An error occured:' + err);
			setLoading(false);
		});
	}
	const handleToggle = (e) => {
		e.target.checked ?	setIsAdmin(true) : setIsAdmin(false);	
	}

	return (
		<div className="login">
			{!!error.length && <ul>{error.map(item => <li>{item}</li>)}</ul>}
			<Body>
				<Input 
					type="email" 
					label="Email"
					value={email}
					onChange={(e)=>setEmail(e.target.value)}
					id="email"
				/>
				<Input
					type="password"
					label="Password"
					value={password}
					onChange={(e)=>setPassword(e.target.value)}
					id="password"
				/>
				{/* <label htmlFor="email">Email</label>
				<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" />
				<label htmlFor="password">Password</label>
				<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" /> */}
				<div className="checkbox">
					<input type="checkbox" value={isAdmin} onChange={handleToggle} id="checkbox" />
					<label htmlFor="checkbox">Login as Admin</label>
				</div>
				<Button onClick={handleSubmit}>Submit {loading && <Loader />}</Button>
			</Body>
		</div>
	)
}

export default Login
