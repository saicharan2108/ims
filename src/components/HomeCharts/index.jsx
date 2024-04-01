import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const HomeCharts = ({ departmentData }) => {
  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);
  let pieChart = null;
  let barChart = null;

  useEffect(() => {
    if (departmentData) {
      const departments = Object.keys(departmentData);
      const itemsPerDepartment = Object.values(departmentData);

      // Destroy previous charts
      if (pieChart) pieChart.destroy();
      if (barChart) barChart.destroy();

      // Pie Chart
      pieChart = new Chart(pieChartRef.current, {
        type: 'pie',
        data: {
          labels: departments,
          datasets: [
            {
              label: 'Items per Department',
              data: itemsPerDepartment,
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
              ],
            },
          ],
        },
      });

      // Bar Graph
      barChart = new Chart(barChartRef.current, {
        type: 'bar',
        data: {
          labels: departments,
          datasets: [
            {
              label: 'Items per Department',
              data: itemsPerDepartment,
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
              ],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [departmentData]);

  return (
    <div>
      <canvas ref={pieChartRef}></canvas>
      <canvas ref={barChartRef}></canvas>
    </div>
  );
};

export default HomeCharts;
