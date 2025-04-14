import React from "react";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const Weather = () => {
  return (
    // weather
    <div className="flex flex-col justify-center items-center text-center place-self-center p-12 rounded-lg bg-[linear-gradient(45deg,_#2f4680,_#500ae4)]">
      {/* search-bar */}
      <div className="flex  gap-3">
        <input
          className="bg-primary text-tx-primary text-2xl pl-6 h-13 border-none outline-none rounded-4xl"
          type="text"
          placeholder="Search"
        />
        <img
          className="w-12 p-4 rounded-3xl bg-primary"
          src={search_icon}
          alt=""
        />
      </div>
      {/* weather-icon */}
      <img className="w-42 m-8" src={clear_icon} alt="" />
      {/* temperature */}
      <p className="text-tx-secundary text-7xl leading-none">16°c</p>
      {/* location */}
      <p className="text-tx-secundary text-4xl">London</p>
      <div className="weather-data"></div>
    </div>
  );
};

export default Weather;
