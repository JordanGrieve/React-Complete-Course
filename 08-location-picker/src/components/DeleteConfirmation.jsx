import { useEffect, useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const intervel = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    // Cleanup function to clear the interval when component unmounts
    return () => {
      clearInterval(intervel);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      // Cleanup if needed
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
        <progress value={remainingTime} max={TIMER} />
      </div>
    </div>
  );
}
