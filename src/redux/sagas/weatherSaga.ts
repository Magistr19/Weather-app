import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from "../actions/weatherActions";
import { FetchWeatherRequestActionInterface } from "interfaces/weather/WeatherActions";
import { FetchWeatherSuccessResponseInterface } from "interfaces/weather/WeatherCrudResponses";
import { getWeatherRequest } from "api/weather/WeatherApi";
import { Action } from "redux";
import { FETCH_WEATHER_REQUEST } from "interfaces/weather/WeatherConsts";

function* fetchWeatherWorker(
  action: Action<typeof FETCH_WEATHER_REQUEST> &
    FetchWeatherRequestActionInterface
): Generator {
  try {
    const value = action.payload;
    const response = (yield call(
      getWeatherRequest,
      value
    )) as FetchWeatherSuccessResponseInterface;
    yield put(fetchWeatherSuccess(response));
  } catch (error: any) {
    yield put(
      fetchWeatherFailure(error?.response?.data?.message || "Error happaned")
    );
  }
}

export function* weatherSagaWatcher(): Generator {
  yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeatherWorker);
}
