

const fetchMockedData = async (request) => {
if(request) {
	const url = 'http://localhost:8080';
	const data = await fetch(url + request);
	const dataObj = data.json();
	return dataObj;
} return 404;
};

export default fetchMockedData;