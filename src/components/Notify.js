import React from 'react'
import './notify.scss';

const Notify = ({notify, children, handleCancel}) => {
	return (
		<div style={{top: notify ? '90px': '-200px'}} className="notify">
			{children}
			<button onClick={handleCancel}>ok</button>
		</div>
	)
}

export default Notify
