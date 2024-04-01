import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

import './index.css';
import 'reactjs-popup/dist/index.css';
import Navbar from '../Navbar';

const UserDept = () => {
  const [formData, setFormData] = useState({
    departmentName: '',
    labName: ''
  });

  const [departmentData, setDepartmentData] = useState([]);

  useEffect(() => {
    // Fetch department data
    fetchDepartmentData();
  }, []);


 

  

  const fetchDepartmentData = async () => {
    try {
      const response = await fetch('http://localhost:3030/api/departments');
      const data = await response.json();
      setDepartmentData(data);
    } catch (error) {
      console.error('Error fetching department data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <img
        src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg"
        alt="BEC"
        className="college-logo"
      />
      <div className="task-container-add">
        <form className="add-dept" onSubmit={handleSubmit}>
          <div className="create-task-form-input">
            <label htmlFor="departmentName">Select The Department Name:</label>
            <select
              id="departmentName"
              className="task-input-field"
              onChange={handleChange}
              name="departmentName"
              value={formData.departmentName}
            >
              <option value="CSE" className="task-input-field">
                CSE
              </option>
              <option value="EEE" className="task-input-field">
                EEE
              </option>
              <option value="ME" className="task-input-field">
                ME
              </option>
              <option value="CE" className="task-input-field">
                CE
              </option>
              <option value="ECE" className="task-input-field">
                ECE
              </option>
              <option value="AE" className="task-input-field">
                AE
              </option>
              <option value="IT" className="task-input-field">
                IT
              </option>
            </select>
          </div>
          <button type="submit" className="add-dept-btn">
            Search
          </button>
        </form>
        <div className="task-list-container">
          <div>
            <div className="table-header">
              <li className="table-column">Department Name</li>
              <li className="table-column">Lab Name</li>
            </div>
            {departmentData.map((task) => (
              <div key={task._id} className="task-row">
                <div className="table-row">{task.departmentName}</div>
                <div className="table-row">{task.labName}</div>
               

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDept;
