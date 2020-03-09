import React,{useState} from 'react'
import SideNav from './SideNav'
import Header from './Header'

const HeaderContainer = ({history,location}) => {
	const [toggle, setToggle] = useState(false);
	const onClickToggle = (e)=>{
		setToggle(prev => !prev);
	}
	const handleClick = (e, to)=>{
		onClickToggle(e)
		if (to === '/login'){
			//logout clear state, redirect.
			localStorage.removeItem('wecreate-token')
			return window.location.href = '/login';
		}
		history.push(to);
	}
	return (
		<div>
			<Header 
				location={location}
				onClickToggle={onClickToggle}
				setToggle={setToggle}
				handleClick={handleClick}
				/>
			<SideNav handleClick={handleClick} show={toggle} />
		</div>
	)
}

export default HeaderContainer
