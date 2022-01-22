import {
	useState,
	useEffect
} from 'react';

/**
 * @param { string } url 
 * @returns { Object } Fetch Result object if succeed, else return 404 and log error
 */
const useFetch = (url) => {

	const [data, setData] = useState('');
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (!url) return;
		setLoading(true);
		async function fetchData() {
			try {
				const response = await fetch(`http://localhost:8080${url}`);
				const receivedData = await response.json();
				setData(receivedData);
			} catch (err) {
				console.log(err);
				setError(true);
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, [url]);

	return {
		isLoading,
		data,
		error
	};

};

export default useFetch;