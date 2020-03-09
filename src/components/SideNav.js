import React from 'react'
import './sidenav.scss';
import ButtonLink from './ButtonLink';

const SideNav = ({show,handleClick}) => {
	return (
		<div 
			style={{left:  show ? '0px': '-200px',backgroundColor: show ? '#000000db': 'rgba(0,0,0,.575)'}}
			className="side-nav"
		>
			<ul>
				<li><ButtonLink onClick={e=>handleClick(e,'/story/new')}>Create Story</ButtonLink></li>
				<li><ButtonLink  onClick={e=>handleClick(e,'/stories')}>List Stories</ButtonLink></li>
				<li><ButtonLink  onClick={e=>handleClick(e,'/login')}>Logout</ButtonLink></li>
			</ul>
		</div>
	)
}

export default SideNav
