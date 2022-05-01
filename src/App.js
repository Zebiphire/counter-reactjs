import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStopwatch,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import AddCounter from "./components/AddCounter";
library.add(faStopwatch, faPlus, faMinus);

function App() {
  const [counters, setCounters] = useState([0]);

  return (
    <div className="App">
      <Header></Header>
      <AddCounter counters={counters} setCounters={setCounters}></AddCounter>
      <div className="counterAlign">
        {counters.map((item, index) => {
          return (
            <Counter
              key={index}
              index={index}
              number={item}
              counters={counters}
              setCounters={setCounters}
            ></Counter>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
