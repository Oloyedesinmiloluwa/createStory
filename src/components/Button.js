import React from 'react'
import './button.scss';

const Button = ({children, onClick, className, name, id}) => {
	return (
		<div className={`button${ className ? " "+className: ""}`}>
			<button id={id} name={name} onClick={onClick}>{children}</button>
		</div>
	)
}

export default Button
