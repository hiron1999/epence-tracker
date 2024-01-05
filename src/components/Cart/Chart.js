import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalVal = dataPointValues.reduce((a,b)=>a+b,0);
  // console.log("total:"+ totalVal)
  // console.log("update cart...." ,dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxVal={totalVal}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
 
};

export default Chart;
