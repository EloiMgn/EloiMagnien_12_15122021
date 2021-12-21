const fetchMockedData = () => {
	const userId = [
		12,
		18
	];
	const url = `http://localhost:3000/user/${userId[0]}/performance`;
	
	if (sessionStorage.getItem('data') === null) {
		fetch(url)
			.then((data) => data.json())
			.then((datasObj) => {
				sessionStorage.setItem('data', JSON.stringify(datasObj));
			});
	}
};

export default fetchMockedData;