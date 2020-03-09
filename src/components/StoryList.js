import React from 'react'
import StoryRow from './StoryRow';

const StoryList = ({stories, handleRowClick}) => {
	return (
		<>
			{stories.length
			? <table>
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
				{stories.map(story => <StoryRow handleRowClick={handleRowClick} key={story.id} story={story} />)}
				</tbody>
			 </table>
			: <h3 className="text-center">You have cleared all stories, there is none left needing your review</h3>
			}
		</>
	)
}

export default StoryList
