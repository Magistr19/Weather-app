import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import "./index.scss";

const getWindDirection = (deg: number): string => {
  if (deg >= 337.5 || deg < 22.5) {
    return "північний";
  } else if (deg >= 22.5 && deg < 67.5) {
    return "північно-східний";
  } else if (deg >= 67.5 && deg < 112.5) {
    return "східний";
  } else if (deg >= 112.5 && deg < 157.5) {
    return "південно-східний";
  } else if (deg >= 157.5 && deg < 202.5) {
    return "південний";
  } else if (deg >= 202.5 && deg < 247.5) {
    return "південно-західний";
  } else if (deg >= 247.5 && deg < 292.5) {
    return "західний";
  } else if (deg >= 292.5 && deg < 337.5) {
    return "північно-західний";
  } else {
    return "невідомий напрямок";
  }
};

const SearchWeatherResult: React.FC = () => {
  const weather = useSelector((state: RootState) => state.weather.weather);
  const isLoading = useSelector((state: RootState) => state.weather.isLoading);
  const currentDate = new Date()
    .toLocaleDateString("uk-UA")
    .replaceAll("/", ".");

  return (
    <>
      {isLoading ? <span>Загрузка...</span> : null}
      {!!weather ? (
        <div className="ResultContainer">
          <img
            src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
            width={100}
            height={100}
            alt={weather?.weather[0]?.description}
          />
          <b className="ResultTemperature">{weather?.main?.temp} °C</b>
          <span className="ResultText">
            <b>Вітер:</b> {weather?.wind?.speed} м/c,
            {getWindDirection(weather?.wind?.deg)}
          </span>
          <span className="ResultText">
            <b>Тиск:</b> {weather?.main?.pressure} гПа
          </span>
          <span className="ResultText">
            <b>Вологість:</b> {weather?.main?.humidity}%
          </span>
          <span className="ResultText">Актуально на {currentDate}</span>
        </div>
      ) : null}
    </>
  );
};

export default SearchWeatherResult;
