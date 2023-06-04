import { useCallback, useEffect, useState } from "react";

const useTimer = ({ initialSeconds = 0, initialRunning = false }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(initialRunning);

  const tick = useCallback(() => {
    return running ? setSeconds((sec) => sec + 1) : undefined;
  }, [running]);

  useEffect(() => {
    const id = setInterval(tick, 1000);

    return () => clearInterval(id);
  }, [tick]);

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => setSeconds(0);
  const stop = () => {
    pause();
    reset();
  };

  return { start, pause, reset, stop, seconds, running };
};

export default useTimer;
