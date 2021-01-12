import React from 'react';
import { CurrentWeather } from './types';
import MainWeather from './MainWeather';
import WindInfo from './WindInfo'

const Weather: React.FC<CurrentWeather> = (props) => {
    const {
        main,
        wind,
        name,
        timezone,
    } = props;
    return (
        <>
            <MainWeather {...main} />
            <WindInfo {...wind} />
        </>
    )

}

export default Weather;
