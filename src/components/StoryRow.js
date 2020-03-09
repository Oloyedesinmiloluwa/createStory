import React from 'react'

const statusMap = (status) => {
	let output;
	if(status === null){
		output = 'pending'
	}else if(status){
		output = 'accepted'
	}else{
		output = 'rejected'
	}
	return output;
}
const StoryRow = ({story,handleRowClick}) => {
	let color = "inherit";
	switch (story.status) {
		case false:
			color = 'red';
			break;
		case true:
			color = 'green';
			break;
		default:
			break;
	}
	return (
		<tr style={{color}} onClick={(e)=>handleRowClick(e,story.id)}>
			<td>{story.summary}</td>
			<td>{story.description}</td>
			<td>{story.cost}</td>
			<td>{story.type}</td>
			<td>{story.complexity}</td>
			<td>{story.estimatedHrs}</td>
			<td>{statusMap(story.status)}</td>
		</tr>
	)
}

export default StoryRow
