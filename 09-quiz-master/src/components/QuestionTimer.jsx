import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [onTimeOut, timeout]);

  useEffect(() => {
    const intervel = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervel);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
