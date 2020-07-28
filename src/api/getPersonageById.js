const URL = "https://gateway.marvel.com:443/v1/public/characters/";

const KEY = "?apikey=5e23eb651237f603c408db091b2abe34";

const getPersonageById = async (id) => {
	const response = await fetch(URL + id + KEY);
	const { data } = await response.json();
	if (response.status === 200) {
		return data.results[0];
	} else return "ERROR";
};

export default getPersonageById;
