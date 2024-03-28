import React, { useState, useEffect } from "react";
import HomeCharts from "../HomeCharts";
import Navbar from "../Navbar";
import "./index.css";

const AdminHome = () => {
  // const [tasks, setTasks] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   const fetchTasks = async () => {
  //     // Adjust API endpoint according to your needs
  //     const api = `https://example.com/api/tasks`;
  //     const response = await fetch(api);
  //     const data = await response.json();
  //     setTasks(data.tasks);

  //     if (response.ok) {
  //       setLoading(false);
  //     }
  //   };
  //   fetchTasks();
  // }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-main">
        <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" alt="BEC" className="college-logo" />
        <div className="greeting-container">
          <h1>
            Welcome to Admin Home
          </h1>
        </div>
        <div className="task-container">
          <div className="task-list-container">
            <HomeCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
