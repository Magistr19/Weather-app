import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";
import { WeatherState } from "../../interfaces/weather/WeatherState";

export interface RootState {
  weather: WeatherState;
}

const rootReducer = combineReducers<RootState>({
  weather: weatherReducer,
});

export default rootReducer;
