import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const time = date.toLocaleTimeString();
      setTime(time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="clock text-center">{time}</div>;
};

export default Clock;
