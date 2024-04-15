import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from '../Navbar';

const MonthlyReport = () => {
  const [formData, setFormData] = useState({
    category: '',
    year: '2024', // Default year selection
    month: '1', // Default month selection (January)
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Map month numbers to month names
  const monthNames = {
    '1': 'January',
    '2': 'February',
    '3': 'March',
    '4': 'April',
    '5': 'May',
    '6': 'June',
    '7': 'July',
    '8': 'August',
    '9': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  };

  useEffect(() => {
    fetchData();
  }, [formData]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://ims-server-63af.onrender.com/api/add/${formData.category.toLowerCase()}/fetch/store/${formData.year}/${formData.month}`);
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
    fetchData();

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
        <h1 className='page-title'>Monthly Reports</h1>
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
          <div className="create-task-form-input">
            <label htmlFor="month">Month:</label>
            <select
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="task-input-field"
            >
              {Object.entries(monthNames).map(([monthNum, monthName]) => (
                <option key={monthNum} value={monthNum}>{monthName}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="add-dept-btn">Search</button>
        </form>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="inventory-table">
            <div className="table-header-monthly">
              <div className="table-column">Item Name</div>
              <div className="table-column">Item Category</div>
              <div className="table-column">Purchase Date</div>
              <div className="table-column">Quantity</div>
              <div className="table-column">Unit Cost</div>
              <div className="table-column">Total Cost</div>
            </div>
            {data.map(item => (
              <div key={item._id} className="table-row-container">
                <div className="table-row">{item.itemName}</div>
                <div className="table-row">{item.itemCategory}</div>
                <div className="table-row">{item.purchaseDate ? new Date(item.purchaseDate).toLocaleDateString() : ''}</div>
                <div className="table-row">{item.quantity}</div>
                <div className="table-row">{item.unitCost}</div>
                <div className="table-row">{item.totalCost}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MonthlyReport;
