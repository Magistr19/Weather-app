import { WeatherActions } from "interfaces/weather/WeatherActions";
import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from "interfaces/weather/WeatherConsts";
import { WeatherState } from "interfaces/weather/WeatherState";

const initialState: WeatherState = {
  weather: null,
  successMessage: null,
  isLoading: false,
  error: null,
};

export const weatherReducer = (
  state = initialState,
  action: WeatherActions
) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
        successMessage: null,
        error: null,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        weather: action.payload,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default weatherReducer;
