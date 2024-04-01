import React, { useState, useEffect } from "react";
import HomeCharts from "../HomeCharts";
import UserNavbar from "../UserNavbar";
import "./index.css";
const sampleDepartmentData = {
  'CSE': 30,
  'IT': 25,
  'ECE': 20,
  'Mechanical': 15,
  'Civil': 10,
};

const UserHomePage = () => {
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
      <UserNavbar />
      <div className="home-main">
        <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg" alt="BEC" className="admin-college-logo" />
        <div className="greeting-container">
          <h1>
            Welcome to User Home Page
          </h1>
        </div>
        <div className="task-container">
          <div className="task-list-container">
            <HomeCharts departmentData={sampleDepartmentData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
