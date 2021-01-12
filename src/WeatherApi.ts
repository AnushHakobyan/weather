import axios from 'axios';
import { camelizeKeys } from 'humps';

const API_KEY: string = 'ee9c5537f9765b62b83672b1e4c23b19';

interface MainWeatherResponse {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
}

interface MainWindResponse {
    deg: number,
    speed: number,
}

interface MainWind extends MainWindResponse {}

interface MainWeather {
    feelsLike: number,
    humidity: number,
    pressure: number,
    temp: number,
    tempMax: number,
    tempMin: number,
}

interface CurrentWeatherResponse {
    main: MainWeatherResponse,
    wind: MainWindResponse,
    name: string,
    timezone: number,
}

interface CurrentWeather {
    main: MainWeather,
    wind: MainWind,
    name: string,
    timezone: number,
}


interface ServerResponse {
    data: CurrentWeatherResponse
}

export const getCurrentWeather = async (city: string): Promise<object>  => {
    const response: ServerResponse = await axios.get(`https:/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const { data }: { data: CurrentWeatherResponse } = response;
    const weatherData = camelizeKeys(data);
    return weatherData;
}