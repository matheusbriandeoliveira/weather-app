import React, { useRef, useState } from "react";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const Weather = () => {
  type WeatherData = {
    humidity: number;
    windSpeed: number;
    temperature: number;
    location: string;
    icon: string;
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city: string) => {
    if (city === "") {
      alert("Digite o nome da cidade");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      const iconCode = data.weather[0].icon as keyof typeof allIcons;
      const icon = allIcons[iconCode] || clear_icon;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(null);
      console.error("Erro ao buscar dados");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-tx-secundary place-self-center p-12 rounded-lg bg-[linear-gradient(45deg,_#2f4680,_#500ae4)]">
      {/* search-bar */}
      <div className="flex gap-3">
        <input
          ref={inputRef}
          className="bg-primary text-tx-primary text-2xl pl-6 h-13 border-none outline-none rounded-4xl"
          type="text"
          placeholder="Pesquisar cidade"
        />
        <img
          className="w-12 p-4 rounded-3xl bg-primary cursor-pointer"
          src={search_icon}
          alt="Pesquisar"
          onClick={() => search(inputRef.current?.value || "")}
        />
      </div>

      {weatherData && (
        <>
          <img className="w-42 m-8" src={weatherData.icon} alt="Clima" />
          <p className="text-7xl leading-none">{weatherData.temperature}°c</p>
          <p className="text-4xl">{weatherData.location}</p>

          <div className="w-full mt-10 flex justify-between text-2xl">
            <div className="flex items-start gap-4">
              <img className="w-8" src={humidity_icon} alt="Umidade" />
              <div className="flex flex-col leading-none">
                <p>{weatherData.humidity} %</p>
                <span className="text-base">Umidade</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img className="w-8" src={wind_icon} alt="Vento" />
              <div className="flex flex-col leading-none">
                <p>{weatherData.windSpeed} Km/h</p>
                <span className="text-base">Vento</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
