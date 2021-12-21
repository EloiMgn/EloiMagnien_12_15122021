const fetchMockedData = async (request) => {
	
	const url = 'http://localhost:8080';
	const data = await fetch(url + request);
	const dataObj = data.json();
	return dataObj;
};

export default fetchMockedData;