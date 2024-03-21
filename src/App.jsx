import { useState } from "react";
import "./App.css";
import LineChart from "./compunents/LineChart/LineChart";
import NavBar from "./compunents/NavBar/NavBar";
import Phons from "./compunents/Phons/Phons";
import PriceOptions from "./compunents/PriceOptions/PriceOptions";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto">
        <NavBar></NavBar>

        <PriceOptions></PriceOptions>
        {/* <PriceOption></PriceOption> */}
        <LineChart></LineChart>
        <Phons></Phons>
      </div>
    </>
  );
}

export default App;
