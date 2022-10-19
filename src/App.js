import { useSelector } from "react-redux";

import "./assets/main.css";

import { SearchInput } from "./components/searchInput/SearchInput";
import Details from "./components/details/Details";
import sunny from "./assets/images/sunny.jpg";
import rainy from "./assets/images/rainy.jpg";
import snowy from "./assets/images/snowy.jpg";
import cloudy from "./assets/images/cloudty.jpg";
import error from "./assets/images/error.jpg";
import loading from "./assets/images/loading.jpg";

function App() {
  const { loadingStatus, weatherData, weatherErrorData } = useSelector(
    (state) => state.weatherDataReducer
  );
  const cloudyWeather =
    weatherData.length !== 0 && weatherData?.weather[0]?.main === "Clouds";
  const rainyWeather =
    weatherData.length !== 0 && weatherData?.weather[0]?.main === "Rain";
  const snowyWeather =
    weatherData.length !== 0 && weatherData?.weather[0]?.main === "Snow";
  const sunnyWeather =
    weatherData.length !== 0 && weatherData?.weather[0]?.main === "Clear";
  const forError = weatherData.length === 0 && weatherErrorData.length !== 0;
  console.log(weatherData);
  let content;

  if (loadingStatus === "loading") {
    content = <p>Loading...</p>;
  }

  if (weatherData.length !== 0) {
    content = (
      <div className="main-weather-info">
        <p className="temp">
          {weatherData.main.temp}
          <sup>C</sup>
        </p>
        <div>
          <p className="name">{weatherData.name}</p>
          <p className="time" style={{marginTop:"10px"}}>{weatherData}</p>
        </div>
        <div>
          <img
            className="icon"
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather-icon"
            width="60"
            height="auto"
          />
          <p className="main">{weatherData.weather[0].main}</p>
        </div>
      </div>
    );
  }

  if (weatherData.length === 0 && weatherErrorData.length !== 0) {
    content = (
      <div>
        {weatherErrorData?.data?.message
          ? weatherErrorData.data.message
          : weatherErrorData}
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${
          cloudyWeather
            ? cloudy
            : sunnyWeather
            ? sunny
            : snowyWeather
            ? snowy
            : rainyWeather
            ? rainy
            : forError
            ? error
            : loadingStatus === "loading"
            ? loading
            : ""
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        margin: "0",
        padding: "0",
        transition: "350ms",
      }}
      className="weather-app"
    >
      {/* Main Info */}
      <div className=" main-info">{content}</div>

      {/* Right Panel */}
      <div className="panel">
        <SearchInput />
        <Details obj={{ loadingStatus, weatherData, weatherErrorData }} />
      </div>
    </div>
  );
}

export default App;
