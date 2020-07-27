const URL = "https://gateway.marvel.com:443/v1/public/characters/";

const KEY = "?apikey=cf666fece5c38969dc259ab90e870c87";

const getPersonageById = async (id) => {
	const response = await fetch(URL + id + KEY);
	const { data } = await response.json();
	if (response.status === 200) {
		return data.results[0];
	} else return "ERROR";
};

export default getPersonageById;
