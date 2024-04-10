import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from '../Navbar';

const AnuallyReports = () => {
  const [formData, setFormData] = useState({
    category: '',
    year: '2024', // Default year selection
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [formData]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/add/${formData.category.toLowerCase()}/store`);
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here if needed
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
            <label htmlFor="category">Category:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="task-input-field"
            >
              <option value="">Select Category</option>
              <option value="Department">Department Store</option>
              <option value="Lab">Lab Equipment</option>
              <option value="Canteen">Canteen Inventory</option>
            </select>
          </div>
          <div className="create-task-form-input">
            <label htmlFor="year">Year:</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="task-input-field"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              {/* Add more options if needed */}
            </select>
          </div>
          <button type="submit" className="add-dept-btn">Search</button>
        </form>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {/* Display fetched data here */}
            <ul>
              {data.map((item, index) => (
                <li key={index}>
                  {/* Display item details */}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default AnuallyReports;
