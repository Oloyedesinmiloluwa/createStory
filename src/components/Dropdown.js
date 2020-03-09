import React from 'react'
import './dropDown.scss';
import ErrorText from './ErrorText';

const Dropdown = ({options, disabled, value, onChange, errorText}) => {
	return (
		<div className="dropDown">
			<select value={value} onChange={onChange} disabled={disabled}>
				<option></option>
				{options.map((option,i) => <option key={i}>{option}</option>)}
			</select>
			<ErrorText>{errorText}</ErrorText>
		</div>
	)
}

export default Dropdown
