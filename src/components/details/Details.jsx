import React from "react";

import "./details.css";

const Details = ({ obj }) => {
  const { weatherData, weatherErrorData, loadingStatus } = obj;
  console.log(weatherData, weatherErrorData, loadingStatus);

  let content;

  if (loadingStatus === "loading") {
    content = <h1>Loading ...</h1>;
  }

  if (weatherData.length !== 0) {
    content = (
      <ul className="details">
        <li>
          <span>Cloudy</span>
          <span>{weatherData.clouds.all}</span>
        </li>
        <li>
          <span>Humidity</span>
          <span>{weatherData.main.humidity}</span>
        </li>
        <li>
          <span>Wind</span>
          <span>{weatherData.wind.speed}</span>
        </li>
        <li>
          <span>Pressure</span>
          <span>{weatherData.main.pressure}</span>
        </li>
      </ul>
    );
    // <ul>
    //     <h3>Wetaher Details</h3>
    //     <li>
    //       <span>Cloudy</span>
    //       <span>{weatherData.clouds}</span>
    //     </li>
    //     <li>
    //       <span>Humidity</span>
    //       <span>{weatherData.main.feels_like}</span>
    //     </li>
    //     <li>
    //       <span>Wind</span>
    //       <span>{weatherData.wind.speed}</span>
    //     </li>
    //     <li>
    //       <span>Rain</span>
    //       <span>{weatherData.main?.cloudy}</span>
    //     </li>
    //   </ul>
  }

  if (weatherData.length === 0 && weatherErrorData.length !== 0) {
    content = (
      <p>
        {weatherErrorData?.data?.message
          ? weatherErrorData.data.message
          : weatherErrorData}
      </p>
    );
  }

  return content;
  //   (
  //     <ul>
  //       <h3>Wetaher Details</h3>
  //       <li>
  //         <span>Cloudy</span>
  //         <span>{obj.cloudy}</span>
  //       </li>
  //       <li>
  //         <span>Humidity</span>
  //         <span>{obj.cloudy}</span>
  //       </li>
  //       <li>
  //         <span>Wind</span>
  //         <span>{obj.cloudy}</span>
  //       </li>
  //       <li>
  //         <span>Rain</span>
  //         <span>{obj.cloudy}</span>
  //       </li>
  //     </ul>
  //   );
};

export default Details;
