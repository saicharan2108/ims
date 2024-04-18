import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from '../Navbar';
import UserNavbar from '../UserNavbar';

const UserAnuallyReports = () => {
  const [formData, setFormData] = useState({
    category: '',
    year: '2024', // Default year selection
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  }, [formData]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://ims-server-63af.onrender.com/api/add/${formData.category.toLowerCase()}/fetch/store/${formData.year}`);
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
console.log(data)
  return (
    <>
      <UserNavbar />
      <img
        src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg"
        alt="BEC"
        className="college-logo"
      />
      <div className="task-container-add">
      <h1 className='page-title'>Annual Reports</h1>
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
  <div className="inventory-table">
    <div className="table-header-anual">
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
        <div className="table-row">{item.unitCost * item.quantity}</div>
      </div>
    ))}
  </div>
)}

      </div>
    </>
  );
};

export default UserAnuallyReports;
