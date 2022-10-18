import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import axios from "axios"

import "./searchInput.css"

import { fetchingWeatherData, fetchedWeatherData, fetchedWeatherErrorData } from '../../store/api/weatherSlice' 

const API_KEY = "dada1c76ae6dc9e9ac449c0b8c58fff3";

export const SearchInput = () => {
    const dispatch = useDispatch();
    const [cityName, setCityName] = useState("")

    const getWeatherData = async (cityName) => {
        try {
          dispatch(fetchingWeatherData());
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
          );
          dispatch(fetchedWeatherErrorData([]));
          dispatch(fetchedWeatherData(res.data));
          setCityName("")
        } catch (err) {
          dispatch(fetchedWeatherData([]))
          dispatch(fetchedWeatherErrorData(err.response ? err.response : err.message))
          setCityName("")
        }
      };

  return (
    <div>
        <input 
        required={true} 
        type="text" 
        value={cityName} 
        onChange={(e) => setCityName(e.target.value)} 
        onKeyUp={(e) => e.code === "Enter" ? getWeatherData(cityName) : null}
        />
        <button onClick={() => getWeatherData(cityName)}>&#x1F50D;</button>
    </div>
  )
}
