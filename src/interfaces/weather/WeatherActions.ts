import { Action } from "redux";
import {
  WeatherFailureResponseInterface,
  FetchWeatherSuccessResponseInterface,
} from "./WeatherCrudResponses";
import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
} from "interfaces/weather/WeatherConsts";

// Get
export interface FetchWeatherRequestActionInterface
  extends Action<typeof FETCH_WEATHER_REQUEST> {
  type: typeof FETCH_WEATHER_REQUEST;
  payload: string;
}

export interface FetchWeatherSuccessActionInterface
  extends Action<typeof FETCH_WEATHER_SUCCESS> {
  type: typeof FETCH_WEATHER_SUCCESS;
  payload: FetchWeatherSuccessResponseInterface;
}

export interface FetchWeatherFailureActionInterface
  extends Action<typeof FETCH_WEATHER_FAILURE> {
  type: typeof FETCH_WEATHER_FAILURE;
  payload: WeatherFailureResponseInterface;
}

export type WeatherActions =
  | FetchWeatherRequestActionInterface
  | FetchWeatherSuccessActionInterface
  | FetchWeatherFailureActionInterface;
