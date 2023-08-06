import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import axios from 'axios';
import { SearchBar } from '../components';

const API_KEY = '0b395109579ebefe9ab1b275b2aae4ec';

export function Home() {
  const [search, setSearch] = useState('');
  const [stateCode, setStateCode] = useState('');

  const [lat, setLat] = useState(41.3888);
  const [lon, setLon] = useState(2.159);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  // const geocoderConvertUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${countryCode}&limit=${limit}&appid=${API_KEY}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  const fetchWeather = async () => {
    const response = await axios.get(url);
    console.log(response.data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div>
      <SearchBar search={search} handleChange={handleChange} />
    </div>
  );
}
