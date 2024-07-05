// import { useState } from "react";
import Google from "./Components/Google";

function App() {
  // const [count, setCount] = useState(0);
  // const Event = () => {
  //   setCount(count + 1);
  // };

  // const EventOne = () => {
  //   if (count === 0) {
  //     setCount(0);
  //     alert('Not less than Zero')
  //   } else {
  //     setCount(count - 1);
  //   }
  // };
  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={Event}>inc</button>
      <button onClick={EventOne}>dec</button> */}
      <Google/>
    </div>
  );
}

export default App;
