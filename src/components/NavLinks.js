import React from 'react'
import './navlinks.scss';
import ButtonLink from './ButtonLink';

const NavLinks = ({links =[], location, handleClick}) => {
	return (
		<div className="nav-links">
			<ul>
				{links.map((link,i) => <li key={i} className={`${location.pathname === link.to ? 'active': ' '}`}><ButtonLink onClick={(e)=>handleClick(e,link.to)}>{link.name}</ButtonLink></li>)}
			</ul>
		</div>
	)
}

export default NavLinks
