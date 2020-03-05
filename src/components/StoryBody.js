import React, {useState} from 'react';
import Body from './Body';
import Input from './Input';
import Dropdown from './Dropdown';
import Loader from './Loader';
import Button from './Button';
import NumberInput from './NumberInput';
import { useSelector } from 'react-redux';
import './storybody.scss'
import TextArea from './TextArea';
// const StoryBody = ({handleSubmit, summary, setSummary, setDescription, description,cost,setCost,setTime, time, loading, disabled, history}) => {
const StoryBody = ({handleSubmit, setSummary, setType, setComplexity, setDescription, setCost,setTime, loading, disabled, story, error, handleReview, isAdmin}) => {
// const StoryBody = ({history, disabled}) => {
	
	const {summary, description, estimatedHrs, cost, complexity, type} = story;
	const errorText = error || {};
	return (
			<Body>
				<Input
					label="Summary"
					value={summary}
					onChange={(e)=>setSummary(e.target.value)}
					id="summary"
					disabled={disabled}
					errorText={errorText['summary']}
				/>
				{/* <Input
					label="Description"
					value={description}
					onChange={(e)=>setDescription(e.target.value)}
					id="description"
					disabled={disabled}
					errorText={errorText['description']}
				/> */}
				<TextArea
					label="Description"
					value={description}
					onChange={(e)=>setDescription(e.target.value)}
					id="description"
					disabled={disabled}
					errorText={errorText['description']}
				
				/>
				<NumberInput
					label="Cost"
					value={cost}
					onChange={(e)=>setCost(e.target.value)}
					id="cost"
					type="number"
					defaultValue="$"
					disabled={disabled}
					errorText={errorText['cost']}
				/>
				<Input
					label="Time"
					value={estimatedHrs}
					onChange={(e)=>setTime(e.target.value)}
					id="time"
					disabled={disabled}
					errorText={errorText['estimatedHrs']}
				/>
				<label>Type</label>
				<Dropdown 
					disabled={disabled}
					options={['enhancement', 'bugfix', 'development', 'qa']}
					errorText={errorText['type']}
					value={type}
					onChange={e=>setType(e.target.value)}
				/>
				<label>Complexity</label>
				<Dropdown
					disabled={disabled}
					options={['low', 'mid', 'high']}
					errorText={errorText['complexity']}
					value={complexity}
					onChange={e=>setComplexity(e.target.value)}
				/>
				{
					isAdmin? 
					<div className="" style={
						{
							display: 'flex',
							justifyContent: 'center'
					}
						}>
						<Button onClick={handleReview} id="accepted">Accept</Button>
						<Button onClick={handleReview} id="rejected">Reject</Button>
					</div> :<Button onClick={handleSubmit}>Submit {loading && <Loader />}</Button>}
			</Body>
	)
}

export default StoryBody
