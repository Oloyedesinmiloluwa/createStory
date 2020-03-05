import React from 'react'
import './input.scss';
import ErrorText from './ErrorText';

const Input = ({label, type, id, onChange, value, disabled, errorText}) => {
	return (
		<div className="input">
			<label htmlFor={id}>{label}</label>
			<input disabled={disabled} onChange={onChange} value={value} type={type || "text"} id={id} />
			<ErrorText>{errorText}</ErrorText>
		</div>
	)
}

export default Input
