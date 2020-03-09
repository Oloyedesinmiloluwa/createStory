import React from 'react'
import './input.scss';
import ErrorText from './ErrorText';

const NumberInput = ({label, id, onChange, value, disabled, errorText}) => {
	return (
		<div className="input">
			<label htmlFor={id}>{label}</label>
			<input disabled={disabled} onChange={onChange} value={value} type={"number"} id={id} />
			<ErrorText>{errorText}</ErrorText>
		</div>
	)
}

export default NumberInput
