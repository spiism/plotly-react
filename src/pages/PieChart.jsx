import React from "react";
import Plot from "react-plotly.js";

const PieChart = (props) => {
  var data = [
    {
      values: [112, 454, 65, 544],
      labels: ["Blue", "Red", "Yellow", "Orange"],
      type: "pie",
    },
  ];

  return (
    <Plot
      data={data}
      layout={{
        width: 500,
        height: 500,
        title: "Favourite Colours In A Class",
      }}
    />
  );
};

export default PieChart;
