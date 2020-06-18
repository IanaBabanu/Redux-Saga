import { race, takeLatest, put, call, delay, take } from 'redux-saga/effects';
import { tick } from '../actions';
import { TIMER } from '../actions/types';

export function* tickSaga() {
  while (true) {
    yield delay(100);
    yield put(tick());
  }
}

export function* listenerSaga() {
  yield race({
    timer: call(tickSaga),
    stop: take([TIMER.PAUSE, TIMER.STOP]),
  });
}

export function* timerSaga() {
  yield takeLatest(TIMER.START, listenerSaga);
}
