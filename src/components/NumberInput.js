import React from 'react'
import './input.scss';
// import './numberInput.scss';
import ErrorText from './ErrorText';

const NumberInput = ({label, type, id, onChange, value, disabled, errorText}) => {
	return (
		<div className="input">
			<label htmlFor={id}>{label}</label>
			<span>($)</span>
			<input disabled={disabled} onChange={onChange} value={value} type={type || "text"} id={id} />
			<ErrorText>{errorText}</ErrorText>
		</div>
	)
}

export default NumberInput
