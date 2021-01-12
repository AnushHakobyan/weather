import React, { useEffect, useState } from 'react';
import { getCurrentWeather } from './WeatherApi';
import Weather from './Weather';
import './App.css';

function App() {
  const [data, setData] = useState({});
  useEffect( () => {
    const get = async () => {
      const response = await getCurrentWeather('London');
      setData(response);
    };
    get();
  }, []);
  return (
    <div className="App">
      {/*@ts-ignore*/}
      {!!data && <Weather { ...data } />}
    </div>
  );
}

export default App;
