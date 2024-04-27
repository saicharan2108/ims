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
  const [grandTotal, setGrandTotal] = useState(0);


  useEffect(() => {
  }, [formData]);

  const calculateGrandTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.quantity * item.unitCost, 0);
    setGrandTotal(total);
  };


  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3030/api/add/${formData.category.toLowerCase()}/fetch/store/${formData.year}`);
      const jsonData = await response.json();

      setData(jsonData);
      calculateGrandTotal(jsonData);

      console.log(jsonData);
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
console.log(formData.category)
  return (
    <>
      <Navbar />
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
      <div className="table-column">Supplier Quantity</div>
      <div className="table-column">Supplier Name</div>
      <div className="table-column">Unit Cost</div>
      <div className="table-column">Unit Measurement</div>
      <div className="table-column">Condition</div>
      <div className="table-column">Total Cost</div>
    </div>
    {data.map(item => (
      <div key={item._id} className="table-row-container">
        <div className="table-row">{item.itemName}</div>
        <div className="table-row">{item.itemCategory}</div>
        <div className="table-row">{item.purchaseDate ? new Date(item.purchaseDate).toLocaleDateString() : ''}</div>
        <div className="table-row">{item.quantity}</div>
        <div className="table-row">{item.supplierContact}</div>
        <div className="table-row">{item.supplierName}</div>

        <div className="table-row">{item.unitCost}</div>
        <div className="table-row">{item.unitMeasurement}</div>
        <div className="table-row">{item.condition}</div>

        <div className="table-row">{item.quantity * item.unitCost}</div>
      </div>
    ))}
    <div className="grand-total">
          <h2>Grand Total Cost Spent in {formData.year}: Rs.{grandTotal}</h2>
        </div>
  </div>
)}

      </div>
    </>
  );
};

export default AnuallyReports;
