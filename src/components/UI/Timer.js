import React,{useEffect,useState} from "react";


function Timer({ onTimeOver, timeOver, hours = 0, minutes = 1, seconds = 0 }) {

  const [time, setTime] = useState({
    hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds)
  });

  const tick = () => {
    if (timeOver) return;

    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
      onTimeOver();
    }
    else if (time.minutes === 0 && time.seconds === 0)
      setTime({
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59
      });
    else if (time.seconds === 0)
      setTime({
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59
      });
    else
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1
      });
  };

  useEffect(() => {
    let timerID = setInterval(tick, 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <p>{`Time Left : ${time.hours
        .toString()
        .padStart(2, "0")}:${time.minutes
          .toString()
          .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}</p>
    </div>
  );
}

export default Timer;