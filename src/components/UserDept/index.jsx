import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import './index.css';
import 'reactjs-popup/dist/index.css';
import Navbar from '../Navbar';
import UserNavbar from '../UserNavbar';

const UserDept = () => {
  const [formData, setFormData] = useState({
    departmentName: '',
    labName: ''
  });

  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [departmentData, setDepartmentData] = useState([]);

  useEffect(() => {
    // Fetch department data
    fetchDepartmentData();
  }, []);

  const fetchDepartmentData = async () => {
    try {
      const response = await fetch('http://localhost:3030/api/departments');
      const data = await response.json();
      // Extract department names
      const departmentNames = data.map(department => department.departmentName);
      setDepartmentOptions(departmentNames);
      setDepartmentData(data);
    } catch (error) {
      console.error('Error fetching department data:', error);
    }
  };

  const deleteDepartment = async (id) => {
    try {
      const response = await fetch(`http://localhost:3030/api/departments/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete department');
      }

      // Update the state to reflect the deletion
      setDepartmentData(departmentData.filter(department => department._id !== id));
      alert('Department deleted successfully');
    } catch (error) {
      console.error('Error deleting department:', error);
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
    // Filter department data based on selected department name
    const filteredData = departmentData.filter(department => department.departmentName === formData.departmentName);
    setDepartmentData(filteredData);
  };

  return (
    <>
      <UserNavbar />
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
              <option value="" disabled>Select Department</option>
              {departmentOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
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
              <li className="table-column">Room No</li>
            </div>
            {departmentData.map((task) => (
              <div key={task._id} className="task-row">
                <div className="table-row">{task.departmentName}</div>
                <div className="table-row">{task.roomNo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDept;
