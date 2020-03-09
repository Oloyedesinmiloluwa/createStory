import React from 'react'
import './errorText.scss';

const ErrorText = ({style, children}) => {
	const defaultStyle = {
		fontSize: '.75rem',
		marginTop: '-20px',
		color: 'red'
	}
	return (
		<p className="errorText" style={{...defaultStyle,...style}}>
			{children}		
		</p>
	)
}

export default ErrorText
