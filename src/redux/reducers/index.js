import { TIMER } from '../actions/types';

const initialState = {
  time: 0,
  status: 'stop',
};

export default function timer(state = initialState, action) {
  switch (action.type) {
    case TIMER.START:
      return {
        ...state,
        status: 'start',
      };
    case TIMER.PAUSE:
      return {
        ...state,
        status: 'pause',
      };
    case TIMER.STOP:
      return {
        ...state,
        status: 'stop',
        time: 0,
      };
    case TIMER.TICK:
      return {
        ...state,
        time: state.time + 1,
      };
    default:
      return state;
  }
}
