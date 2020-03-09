export const validateLogin = (data) => {
	let error = {};
	if(!data.email){
		error.email =  "Email is required";
	}
	if (!data.password){
		error.password = "Password is required";
	}
	return error;
}
export const validateStory = (data) => {
	let error = {};
	const requiredkeys = ['summary', 'description', 'cost', 'estimatedHrs', 'complexity', 'type'];
	requiredkeys.forEach(field => {
		if(!data[field]){
			error[field] = `${field} field is required`
		}
	});
	return error;
	/* 
	if(!data.summary){
		error.summary= ["Summary is required"]
	}
	if(!data.description){
		error.description= ["Description is required"]
	}
	if(!data.complexity){
		error.complexity= ["Complexity is required"]
	}
	if(!data.cost){
		error.cost= ["Cost is required"]
	}
	if(!data.type){
		error.type= ["Type is required"]
	}
	if(!data.estimatedHrs){
		error.estimatedHrs= ["Time is required"]
	} 
	return error;*/
}
