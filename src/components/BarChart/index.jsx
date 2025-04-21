import React from "react";
import Plot from "react-plotly.js";

import digital_metrics_data from "../../data/digital-platform-metrics-data.json";
const BarChart = () => {
  const categories = digital_metrics_data?.categories;
  const datasets = digital_metrics_data?.datasets;
  const traces = datasets.map((dataset) => ({
    x: categories,
    y: dataset.values,
    name: dataset.name,
    type: "bar",
  }));

  return (
    <Plot
      data={traces}
      layout={{
        autosize: true,
        barmode: "group",
        title: "Monthly Performance Overview",
        xaxis: { title: "Month" },
        yaxis: { title: "Values" },
        autosize: true,
        legend: { orientation: "h", x: 0.1, y: -0.2 },
        margin: { t: 40, b: 80 },
        useResizeHandler: true,
      }}
      config={{ responsive: true }}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default BarChart;
