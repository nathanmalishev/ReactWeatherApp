var axios = require('axios');

var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY  = '52e59bb71385f44b7e78975b4f8bd5fe';

function prepRouteParams(queryStringData) {
	return Object.keys(queryStringData)
		.map(function(key) {
			return key + '=' + encodeURIComponent(queryStringData[key]);
		}).join('&')
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

function getCurrentWeather(city){
	var queryStringData = getQueryStringData(city);
	var url = prepUrl('weather', queryStringData);


	return axios.get(url)
		.then(function(response){
			return (response.data);
		})
		.catch(function(response){
			console.log(response);
		})
}

function getForecast(city){
	var queryStringData = getQueryStringData(city);
	var url = prepUrl('forecast/daily', queryStringData);

	return axios.get(url)
		.then(function(response){
			return (response.data);
		})
		.catch(function(response){
			console.log(response);
		})
}

module.exports = {
	getCurrentWeather: getCurrentWeather,
	getForecast: getForecast
};