import { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  function changeTextHandler() {
    setChangeText(true);
  }

  return (
    <div>
      <h1>Hello, welcome to our application!</h1>
      {!changeText && <p>This is a simple greeting component.</p>}
      {changeText && <p>The text has been changed!</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
