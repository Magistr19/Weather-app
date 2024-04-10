import { WeatherType } from "./WeatherType";

export interface FetchWeatherSuccessResponseInterface extends WeatherType {
  value: string;
}

export interface WeatherFailureResponseInterface {
  message: string;
}
