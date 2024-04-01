import React, { useState } from 'react';

import './index.css';
import 'reactjs-popup/dist/index.css';
import UserNavbar from '../UserNavbar';


const DepartmentData = [
  {
    "id": 1,
    "departmentName": "CSE",
    "labName": "Lab1"
  },
  {
    "id": 2,
    "departmentName": "EEE",
    "labName": "Lab2"
  },
  {
    "id": 3,
    "departmentName": "ME",
    "labName": "Lab3"
  },
  {
    "id": 4,
    "departmentName": "CE",
    "labName": "Lab4"
  },
  {
    "id": 5,
    "departmentName": "ECE",
    "labName": "Lab5"
  },
  {
    "id": 6,
    "departmentName": "AE",
    "labName": "Lab6"
  },
  {
    "id": 7,
    "departmentName": "CE",
    "labName": "Lab7"
  },
  {
    "id": 8,
    "departmentName": "IT",
    "labName": "Lab8"
  },
  {
    "id": 9,
    "departmentName": "CSE",
    "labName": "Lab9"
  },
  {
    "id": 10,
    "departmentName": "EEE",
    "labName": "Lab10"
  },
  {
    "id": 11,
    "departmentName": "ME",
    "labName": "Lab11"
  },
  {
    "id": 12,
    "departmentName": "ECE",
    "labName": "Lab12"
  }
]



const UserDept = () => {
  const [formData, setFormData] = useState({
    departmentName: '',
    labName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
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
      <UserNavbar/>
      <img
        src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg"
        alt="BEC"
        className="college-logo"
      />
      <div className="task-container-add">
        <form className="add-dept" onSubmit={handleSubmit}>
          <div className="create-task-form-input">
            <label htmlFor="departmentName">Select The Department Name:</label>
            <select id="departmentName" className="task-input-field" onChange={handleChange} name="departmentName" value={formData.departmentName}>
              <option value="CSE" className="task-input-field">CSE</option>
              <option value="EEE" className="task-input-field">EEE</option>
              <option value="ME" className="task-input-field">ME</option>
              <option value="CE" className="task-input-field">CE</option>
              <option value="ECE" className="task-input-field">ECE</option>
              <option value="AE" className="task-input-field">AE</option>
              <option value="IT" className="task-input-field">IT</option>
            </select>
          </div>
          <button type="submit" className="add-dept-btn">Search</button>
        </form>
        <div className="task-list-container">
          <div>
            <div className="table-header">
              <li className="table-column">SL No.</li>
              <li className="table-column">Department Name</li>
              <li className="table-column">Lab Name</li>
             

            </div>
            {DepartmentData.map(task => (
  <div key={task.id} className="task-row">
    <div className="table-row">{task.id}</div>
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

