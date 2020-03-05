import React, {useState} from 'react';
import './createStory.scss';
import StoryBody from '../components/StoryBody';
import { validateStory } from '../validation';
import { useDispatch } from 'react-redux';
import { createStory } from '../actions/storyAction';

const CreateStory = ({history}) => {
	const [summary, setSummary] = useState("");
	const [description, setDescription] = useState("");
	const [cost, setCost] = useState("$");
	const [estimatedHrs, setTime] = useState("");
	const [complexity, setComplexity] = useState("");
	const [type, setType] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});
	
	const story = {
		summary,
		description,
		cost,
		estimatedHrs,
		complexity,
		type
	}
	const dispatch = useDispatch();
	const handleSubmit = ()=> {
		setLoading(true)
		const errors = validateStory(story);
		if(errors.summary){
			console.log(errors);
			setLoading(false)
			return setError(errors);
		}
		dispatch(createStory(story))
		history.push('/stories');
	}
	return (
		<div className="new-story">
			<h1>Create Story</h1>
			<StoryBody
				story={story}
				setSummary={setSummary}
				setDescription={setDescription}
				setCost={setCost}
				setTime={setTime}
				setType={setType}
				setComplexity={setComplexity}
				history={history}
				loading={loading}
				handleSubmit={handleSubmit}
				error={error}
			/>
		</div>
	)
}

export default CreateStory
