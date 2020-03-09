import React from 'react'
import './buttonLink.scss';

const ButtonLinks = ({children, onClick}) => {
	return (
		<>
			<button onClick={onClick} className="button-link">{children}</button>
		</>
	)
}

export default ButtonLinks
