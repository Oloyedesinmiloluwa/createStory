import React from 'react'
import StoryRow from './StoryRow';

const StoryList = ({stories, isAdmin}) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Summary</th>
					<th>Description</th>
					<th>Cost</th>
					<th>Type</th>
					<th>Complexity</th>
					<th>Time(hr)</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
			{stories.map(story => <StoryRow story={story} isAdmin={isAdmin} />)}
			</tbody>
		</table>
	)
}

export default StoryList
