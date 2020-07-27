const URL =
	"https://gateway.marvel.com:443/v1/public/characters?apikey=cf666fece5c38969dc259ab90e870c87";

const getApiPersonages = async () => {
	const response = await fetch(URL);
	const { data } = await response.json();
	if (response.status === 200) {
		return data.results;
	} else return "ERROR";
};

export default getApiPersonages;
