
/**
 * 
 * @param { string } request 
 * @returns { Object } Fetch Result object if succeed, else return 404 and log error
 */
const fetchData = async (request) => {
	try {
		if(request) {
			const url = 'http://localhost:8080';
			const data = await fetch(url + request);
			const dataObj = await data.json();
			return dataObj;
		} return 404;
	} catch (error) {
		console.error(error);
	}
return 404;
};

export default fetchData;
