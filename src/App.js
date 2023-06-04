import useTimer from "./hooks/useTimer";
import "./styles.css";

export default function App() {
  const { start, pause, reset, stop, seconds, running } = useTimer(0, false);

  return (
    <div className="App">
      <h1>{seconds}</h1>
      <button onClick={running ? pause : start}>Start/Pause</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
