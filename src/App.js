import "./App.css";
import { useState, useEffect } from "react";
import Button from "./components/Button/Button";
import Cam from "./components/Cam/Cam";
import TelemData from "./components/TelemData/TelemData";
import Map from "./components/Map/Map";
import LineChart from "./components/LineChart/LineChart";

function App() {
  const [currentData, setCurrentData] = useState([0.1, 0.2, 0.1, 0.2, 0.1]);
  const [currentLabel, setCurrentLabel] = useState([1, 2, 3, 4, 5]);

  const dataChangeHandler = () => {
    setCurrentData((prev) => {
      const updated = [...prev, Math.random()];
      return [updated[1], updated[2], updated[3], updated[4], updated[5]];
    });
  };

  const labelChangeHandler = () => {
    setCurrentLabel((prev) => {
      const incremented = prev[4] + 1;
      return [prev[1], prev[2], prev[3], prev[4], incremented];
    });
  };

  return (
    <div className="App">
      <div className="sidebar">
        <Button />
      </div>
      <div className="functional-elements">
        <div className="card-container">
          <div className="card">
            <TelemData />
          </div>
          <div className="card">3d</div>
          <div className="card">
            <Map />
          </div>
        </div>
        <div className="graph-and-cam-container">
          <div className="graph">
            <div className="graph2">
              <LineChart label="temperature"
                dataArray={currentData}
                labels={currentLabel}
              ></LineChart>
              <LineChart label="pressure"
                dataArray={currentData}
                labels={currentLabel}
              ></LineChart>
            </div>

            <div className="graph2">
              <LineChart label="battery voltage"
                dataArray={currentData}
                labels={currentLabel}
              ></LineChart>
              <LineChart label="revolution"
                dataArray={currentData}
                labels={currentLabel}
              ></LineChart>
            </div>

            <div className="graph2">
              <LineChart label="altitude"
                dataArray={currentData}
                labels={currentLabel}
              ></LineChart>
              <LineChart label="speed"
                dataArray={currentData}
                labels={currentLabel}
              ></LineChart>
            </div>
          </div>
          {useEffect(() => {
            const idetifier = setTimeout(() => {
              dataChangeHandler();
              labelChangeHandler();
            }, 1000);
            return () => {
              clearTimeout(idetifier);
            };
          }, [currentData])}

          <div className="cam-container">
            <Cam />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
