import React from 'react'
import './header.scss';
import MenuIcon from './MenuIcon';
import NavLinks from './NavLinks';

const Header = ({onClickToggle, location, handleClick}) => {
	return (
		<div className="header">
			<header>
				<div className="brand">
					<button onClick={onClickToggle}><MenuIcon /></button><h2>WeCreate</h2>
				</div>
				<NavLinks
					location={location}
					links={[{name:'Create',to: '/story/new'}, {name: 'View', to: '/stories'}, {name: 'Logout',to: '/login'}]}
					handleClick={handleClick}
					/>
			</header>
		</div>
	)
}

export default Header
