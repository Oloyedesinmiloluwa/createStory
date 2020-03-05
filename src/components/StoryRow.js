import React from 'react'
import { Link } from 'react-router-dom'

const StoryRow = ({story, isAdmin}) => {
	return (
		<tr style={{color: story.status === 'rejected' ? 'red': "inherit"}}>
			<td>{isAdmin ?<Link to={`/stories/${story.id}/review`}>{story.summary}</Link>: story.summary}</td>
			<td>{story.description}</td>
			<td>{story.cost}</td>
			<td>{story.type}</td>
			<td>{story.complexity}</td>
			<td>{story.estimatedHrs}</td>
			<td>{story.status}</td>
		</tr>
	)
}

export default StoryRow
