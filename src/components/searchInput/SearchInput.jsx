import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import axios from "axios";

import "./searchInput.css";

import {
  fetchingWeatherData,
  fetchedWeatherData,
  fetchedWeatherErrorData,
} from "../../store/api/weatherSlice";

const API_KEY = "dada1c76ae6dc9e9ac449c0b8c58fff3";

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("");

  const getWeatherData = async (cityName) => {
    try {
      dispatch(fetchingWeatherData());
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      );
      dispatch(fetchedWeatherErrorData([]));
      dispatch(fetchedWeatherData(res.data));
      setCityName("");
    } catch (err) {
      dispatch(fetchedWeatherData([]));
      dispatch(
        fetchedWeatherErrorData(err.response ? err.response : err.message)
      );
      setCityName("");
    }
  };

  useEffect(() => {
    getWeatherData("Kitab");
  }, []);

  return (
    <div className="search-wrapper">
      {/* Search Input */}
      <div className="search">
        <input
          className="search-input"
          placeholder="Search city name"
          required={true}
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          onKeyUp={(e) =>
            e.code === "Enter" ? getWeatherData(cityName) : null
          }
        />
        <button className="search-btn" onClick={() => getWeatherData(cityName)}>
          &#x1F50D;
        </button>
      </div>

      {/* Search by Regions */}
      <ul className="regions">
        <li onClick={() => getWeatherData("Tashkent")}>Tashkent</li>
        <li onClick={() => getWeatherData("Samarqand")}>Samarqand</li>
        <li onClick={() => getWeatherData("Qashqadaryo")}>Qashqadaryo</li>
        <li onClick={() => getWeatherData("Buxoro")}>Buxoro</li>
      </ul>
    </div>
  );
};
