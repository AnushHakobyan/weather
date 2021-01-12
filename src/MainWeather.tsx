import React from 'react';
import { MainWeather as MainWeatherProps } from './types';

const MainWeather: React.FC<MainWeatherProps> = (props) => {
    const {
        feelsLike,
        humidity,
        pressure,
        temp,
        tempMax,
        tempMin,
    } = props;
    return (
        <div>
            <p>Temperature: {temp}</p>
            <p>Feels Like: {feelsLike}</p>
            <p>Min and Max temperatures {tempMin} - {tempMax}</p>
            <p>Feels Like: {feelsLike}</p>
            <p>Humidity: {humidity}</p>
            <p>Pressure: {pressure}</p>
        </div>
    );
}

export default MainWeather;
