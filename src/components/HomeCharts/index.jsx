import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Doughnut } from "react-chartjs-2";
import "./index.css";

export const data = {
  labels: [
    "ECE", // Electronics & Communications Engineering
    "EIE", // Electronics & Instrumentation Engineering
    "EEE", // Electrical & Electronics Engineering
    "CSE", // Computer Science & Engineering
    "IT",  // Information Technology
    "ME",  // Mechanical Engineering
    "ChemE", // Chemical Engineering
    "CE",  // Civil Engineering
    "Chem", // Department of Chemistry
    "Physics", // Department of Physics
    "MCA"  // Department of MCA
  ],
  datasets: [
    {
      label: "# of Purchases",
      data: [0, 1, 5, 8, 9, 15, 10, 9, 8, 3, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function HomeCharts() {
  const [chart, setChart] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        ],
      },
    },
    series: [
      {
        name: "Monthly Sales Amount",
        data: [10, 20, 40, 50, 60, 20, 10, 35, 45, 70, 25, 70],
      },
    ],
  });

  return (
    <div className="graphs-container">
      <div>
        <h1>New Inventory Purchases</h1>
        <Chart
          options={chart.options}
          series={chart.series}
          type="bar"
          width="500"
        />
      </div>
      <div>
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default HomeCharts;
