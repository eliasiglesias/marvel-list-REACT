const URL = "https://gateway.marvel.com:443/v1/public/characters?limit=";
const URLNAME = "https://gateway.marvel.com:443/v1/public/characters?limit=";
const OFFSET = "&offset=";
const ORDERBY = "&orderBy=";
const NAMESTARTSWITH = "&nameStartsWith=";
const KEY = "&apikey=5e23eb651237f603c408db091b2abe34";

const getApiPersonages = async (name, limit, order, offset) => {
	let FINALURL = URL + limit + OFFSET + offset + ORDERBY + order + KEY;
	if (name) {
		FINALURL =
			URLNAME +
			limit +
			OFFSET +
			offset +
			ORDERBY +
			order +
			NAMESTARTSWITH +
			name +
			KEY;
	}

	const response = await fetch(FINALURL);
	const { data } = await response.json();
	if (response.status === 200) {
		return data.results;
	} else return "ERROR";
};

export default getApiPersonages;
