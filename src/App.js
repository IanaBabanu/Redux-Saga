import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { start, pause, stop } from './redux/actions/index';
import './App.css';

function App() {
  const time = useSelector(state => state.timer.time);
  const status = useSelector(state => state.timer.status);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    calculateTime();
  }, [time]);

  const dispatch = useDispatch();

  const onStart = () => {
    dispatch(start());
  };

  const onPause = () => {
    dispatch(pause());
  };

  const onStop = () => {
    dispatch(stop());
  };

  const calculateTime = () => {
    if (time > 59) {
      const seconds = time % 60;
      setSeconds(seconds);
      const minutes = Math.floor(time / 60);
      setMinutes(minutes);
    } else {
      setSeconds(time);
      setMinutes(0);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="app-content">
          <span className="minutes">{minutes}</span>
          <span className="divider"> : </span>

          <span className="seconds">{seconds}</span>
        </div>
        <div className="btn-group">
          {status === 'start' ? (
            <button className="pause-btn" onClick={onPause}>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
          ) : (
            <button className="start-btn" onClick={onStart}>
              <div className="btn-inner"></div>
            </button>
          )}
          <button className="start-btn" onClick={onStop}>
            <div className="square"></div>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
