import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const intervel = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    // Cleanup function to clear the interval when component unmounts
    return () => {
      clearInterval(intervel);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
