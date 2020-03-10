import React, {useState} from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup} from '../actions/loginAction';
import Loader from './Loader';
import { validateSignup } from '../validation';
import Input from './Input';
import Body from './Body';
import Notify from './Notify';
import './login.scss';

const Signup = ({history}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});
	const [apiError, setApiError] = useState({});
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		const errorObject = validateSignup({email, password, firstName, lastName})
		if(Object.keys(errorObject).length){
			
			setError(errorObject);
			return;
		}
		setLoading(true);
		dispatch(signup({email, password,firstName, lastName}))
		.then(() => {
			setLoading(false);
			history.push('/login');
		})
		.catch(err => {
			setLoading(false);
			if(!err.response){
				return setApiError({message: 'You seem to have a problem with your internet'})
			}
			setApiError({message: err.response.data && err.response.data.message})
		});
	}


	return (
		<>
		<Notify handleCancel={()=>setApiError({})} notify={!!Object.keys(apiError).length}>{apiError.message}</Notify>
		<div className="login">
			<Body>
				<Input 
					label="Firstname"
					value={firstName}
					onChange={(e)=>setFirstName(e.target.value)}
					id="firstName"
					errorText={error.firstName}
				/>
				<Input 
					label="Lastname"
					value={lastName}
					onChange={(e)=>setLastName(e.target.value)}
					id="lastName"
					errorText={error.lastName}
				/>
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
				<Button onClick={handleSubmit}>Submit {loading && <Loader />}</Button>
				<Link to="/login">Login</Link>
			</Body>
		</div>
		</>
	)
}

export default Signup
