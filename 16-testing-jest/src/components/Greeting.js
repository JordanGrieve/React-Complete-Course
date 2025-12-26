import { useState } from "react";

import Output from "./Output.js";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  function changeTextHandler() {
    setChangeText(true);
  }

  return (
    <div>
      <h1>Hello, welcome to our application!</h1>
      {!changeText && <Output>This is a simple greeting component.</Output>}
      {changeText && <Output>The text has been changed!</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
