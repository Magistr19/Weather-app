import { all, fork } from "redux-saga/effects";
import { weatherSagaWatcher } from "./weatherSaga";

function* rootSaga() {
  yield all([fork(weatherSagaWatcher)]);
}

export default rootSaga;
