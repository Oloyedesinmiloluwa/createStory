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
}
