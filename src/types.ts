export interface MainWeatherResponse {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
}

export interface MainWindResponse {
    deg: number,
    speed: number,
}

export interface MainWind extends MainWindResponse {}

export interface MainWeather {
    feelsLike: number,
    humidity: number,
    pressure: number,
    temp: number,
    tempMax: number,
    tempMin: number,
}

export interface CurrentWeatherResponse {
    main: MainWeatherResponse,
    wind: MainWindResponse,
    name: string,
    timezone: number,
}

export interface CurrentWeather {
    main: MainWeather,
    wind: MainWind,
    name: string,
    timezone: number,
}


export interface ServerResponse {
    data: CurrentWeatherResponse
}