import React, { useState } from 'react';
import './index.css';
import Navbar from '../Navbar';

const IssueItem = () => {
  const [formData, setFormData] = useState({
    category: '',
    itemName: '',
    departmentName: 'CSE',
    labName: '',
    year: '',
    monthName: ''
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
      const response = await fetch('http://localhost:3030/api/issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Issue created successfully:', data);
        alert('Issue created successfully');
      } else {
        console.error('Failed to create issue:', response.statusText);
        alert('Failed to create issue');
      }
    } catch (error) {
      console.error('Error creating issue:', error);
      alert('Error creating issue');
    }
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
            <label htmlFor="category">Category :</label>
            <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="itemName">Item Name:</label>
            <input type="text" id="itemName" name="itemName" value={formData.itemName} onChange={handleChange} className="task-input-field" />
          </div>
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
          <div className="create-task-form-input">
            <label htmlFor="labName">Lab Name:</label>
            <input type="text" id="labName" name="labName" value={formData.labName} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="year">Year:</label>
            <input type="text" id="year" name="year" value={formData.year} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="monthName">Month Name:</label>
            <input type="text" id="monthName" name="monthName" value={formData.monthName} onChange={handleChange} className="task-input-field" />
          </div>
          <button type="submit" className="add-dept-btn">Issue</button>
        </form>
      </div>
    </>
  );
};

export default IssueItem;
