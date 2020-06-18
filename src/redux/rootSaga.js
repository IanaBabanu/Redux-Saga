// Core
import { all, call } from 'redux-saga/effects';
import { timerSaga } from './sagas';

// Instruments

export function* rootSaga() {
  try {
    yield all([call(timerSaga)]);
  } catch (error) {
    console.log('→ error caught', error);
  }
}
