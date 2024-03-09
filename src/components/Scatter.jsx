import React from "react";
import { ScatterChart, XAxis, YAxis, Tooltip } from "recharts";

function Scatter() {
  return (
    <>
      <div className="chart-container">
        <ScatterChart width={400} height={300} data={convertedAmountData}>
          <XAxis dataKey="category" /> // X-axis represents categories
          <YAxis /> // Numerical Y-axis for amounts
          <Tooltip /> // Tooltip to display individual amounts on hover
          {/* Apply jitter and color-coding here within the ScatterChart component */}
        </ScatterChart>
      </div>
    </>
  );
}

export default Scatter;
