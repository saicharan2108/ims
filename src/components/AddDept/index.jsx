import React, { useState } from 'react';
import './index.css';
import Navbar from '../Navbar';

const AddDeptForm = () => {
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
      <Navbar/>
      <img
              src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg"
              alt="BEC"
              className="college-logo"
            />
    <div className="task-container-add">
      <form className="add-dept" onSubmit={handleSubmit}>
        <div className="create-task-form-input">
          <label htmlFor="departmentName">Department Name:</label>
          <input type="text" id="departmentName" name="departmentName" value={formData.departmentName} onChange={handleChange} className="task-input-field" />
        </div>
        <div className="create-task-form-input">
          <label htmlFor="labName">Lab Name:</label>
          <input type="text" id="labName" name="labName" value={formData.labName} onChange={handleChange} className="task-input-field" />
        </div>
        <button type="submit" className="add-dept-btn">Add Dept</button>
      </form>
    </div>
    </>
  );
};

export default AddDeptForm;
