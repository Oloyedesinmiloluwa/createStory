import React from 'react'
import './textArea.scss';
import ErrorText from './ErrorText';

const TextArea = ({label,placeholder,id, onChange, value, disabled, errorText}) => {
	return (
		<div className="textarea">
			<label htmlFor={id}>{label}</label>
			<textarea disabled={disabled} placeholder={placeholder} onChange={onChange} value={value} id={id} />
			<ErrorText>{errorText}</ErrorText>
		</div>
	)
}

export default TextArea;
