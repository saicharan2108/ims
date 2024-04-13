import React, { useState } from 'react';
import './index.css';
import Navbar from '../Navbar';

const AddDeptForm = () => {
  const [formData, setFormData] = useState({
    departmentName: '',
    roomNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3030/api/add/department', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json(); // Parse response data
        console.log('Department added successfully:', data);
        alert("Department added successfully");
      } else {
        console.error('Error adding department:', res.statusText);
        alert("Error adding department. Please try again.");
      }
    } catch (error) {
      console.error('Error adding department:', error);
      alert("Error adding department. Please try again.");
    }
  };

  return (
    <>
      <Navbar/>
      <img
        src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg"
        alt="BEC"
        className="college-logo"
      />

      <div className="task-container-add">
      <h1 className='page-title'>Add Department</h1>


        <form className="add-dept" onSubmit={handleSubmit}>
          <div className="create-task-form-input">
            <label htmlFor="departmentName">Department Name:</label>
            <input type="text" id="departmentName" name="departmentName" value={formData.departmentName} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="roomNo">Room No:</label>
            <input type="text" id="roomNo" name="roomNo" value={formData.labName} onChange={handleChange} className="task-input-field" />
          </div>
          <button type="submit" className="add-dept-btn">Add Dept</button>
        </form>
      </div>
    </>
  );
};

export default AddDeptForm;
