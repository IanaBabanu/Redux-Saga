import { TIMER } from './types';

export const start = () => ({
  type: TIMER.START,
});

export const pause = () => ({
  type: TIMER.PAUSE,
});

export const stop = () => ({
  type: TIMER.STOP,
});

export const tick = () => ({
  type: TIMER.TICK,
});
