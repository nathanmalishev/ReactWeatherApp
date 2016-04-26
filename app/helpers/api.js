import axios from 'axios'

const _baseURL = 'http://api.openweathermap.org/data/2.5/';
const _APIKEY  = process.env.OPEN_WEATHER_KEY;

function prepRouteParams(queryStringData) {
	return Object.keys(queryStringData)
		.map((key)=> { key + '=' + encodeURIComponent(queryStringData[key]);}).join('&')
}

function getQueryStringData(city) {
	return {
		q: `${city},au`,
		type: 'accurate',
		APPID: _APIKEY,
		cnt: 5,
		units: 'metric'
	}
}

function prepUrl(type, queryStringData){
	return _baseURL+type+'?'+prepRouteParams(queryStringData);
}

export function getCurrentWeather(city){
	const queryStringData = getQueryStringData(city);
	const url = prepUrl('weather', queryStringData);


	return axios.get(url)
		.then(function(response){
			return (response.data);
		})
		.catch(function(response){
			console.log(response);
		})
}

export function getForecast(city){
	const queryStringData = getQueryStringData(city);
	const url = prepUrl('forecast/daily', queryStringData);

	return axios.get(url)
		.then(function(response){
			return (response.data);
		})
		.catch(function(response){
			console.log(response);
		})
}
