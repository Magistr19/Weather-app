import {
  FetchWeatherRequestActionInterface,
  FetchWeatherSuccessActionInterface,
  FetchWeatherFailureActionInterface,
} from "interfaces/weather/WeatherActions";
import { FetchWeatherSuccessResponseInterface } from "interfaces/weather/WeatherCrudResponses";
import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
} from "interfaces/weather/WeatherConsts";

export const fetchWeatherRequest = (
  value: string
): FetchWeatherRequestActionInterface => ({
  type: FETCH_WEATHER_REQUEST,
  payload: value,
});

export const fetchWeatherSuccess = (
  data: FetchWeatherSuccessResponseInterface
): FetchWeatherSuccessActionInterface => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,
});

export const fetchWeatherFailure = (
  error: string
): FetchWeatherFailureActionInterface => ({
  type: FETCH_WEATHER_FAILURE,
  payload: {
    message: error,
  },
});
