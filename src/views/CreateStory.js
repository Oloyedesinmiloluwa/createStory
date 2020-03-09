import React, {useState} from 'react';
import './createStory.scss';
import StoryBody from '../components/StoryBody';
import { validateStory } from '../validation';
import { useDispatch } from 'react-redux';
import { createStory } from '../actions/storyAction';
import HeaderContainer from '../components/HeaderContainer';
import Notify from '../components/Notify';

const CreateStory = (props) => {
	const [summary, setSummary] = useState("");
	const [description, setDescription] = useState("");
	const [cost, setCost] = useState("");
	const [estimatedHrs, setTime] = useState("");
	const [complexity, setComplexity] = useState("");
	const [type, setType] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});
	const [apiError, setApiError] = useState({});
	
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
		
		if(Object.keys(errors).length){
			console.log(errors);
			setLoading(false)
			return setError(errors);
		}
		dispatch(createStory(story))
		.then(() => props.history.push('/stories'))
		.catch(err => {
			setLoading(false)
			if(!err.response){
				return setApiError({message: 'You seem to have a problem with your internet'})
			}
			setApiError({message: err.response.data && err.response.data.message})
		})
		
	}
	return (
		<>
		<Notify handleCancel={()=>setApiError({})} notify={!!Object.keys(apiError).length}>{apiError.message}</Notify>
		<HeaderContainer {...props}/>
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
					history={props.history}
					loading={loading}
					handleSubmit={handleSubmit}
					error={error}
				/>
			</div>
		</>
	)
}

export default CreateStory
