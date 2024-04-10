import React, { useState } from 'react';
import './index.css';
import Navbar from '../Navbar';

const AddInventory = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    systemConfiguration: '',
    quantity: '',
    unitPrice: '',
    invoiceNo: '',
    purchaseDate: '',
    expiryDate: '',
    supplierName: '',
    categoryName: '',
    supplierAddress: '',
    supplierContactNumber: ''
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
      const response = await fetch('http://localhost:3030/api/inventory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
  
      if (response.ok){

        alert("Inventory Added")

      const data = await response.json();
      console.log('Item added successfully:', data);
      // Optionally, you can reset the form data after successful submission
      setFormData({
        itemName: '',
        systemConfiguration: '',
        quantity: '',
        unitPrice: '',
        invoiceNo: '',
        purchaseDate: '',
        expiryDate: '',
        supplierName: '',
        categoryName: '',
        supplierAddress: '',
        supplierContactNumber: ''
      });
    } 
  }catch (error) {
      console.error('Error adding item:', error.message);
      alert('Error adding item:', error.message);
    }
  };
  

  return (
    <div className='add-items-main-container'>
    <Navbar/>  
    <div className="add-inventory-items-container">
    <img
              src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg"
              alt="BEC"
              className="college-logo"
            />
      <form className="add-inventory-form" onSubmit={handleSubmit}>
        <div className="create-task-form-input">
          <label htmlFor="itemName">Item Name:</label>
          <input type="text" id="itemName" name="itemName" value={formData.itemName} onChange={handleChange} className="task-input-field" />
        </div>
        <div className="create-task-form-input">
          <label htmlFor="systemConfiguration">System Configuration:</label>
          <input type="text" id="systemConfiguration" name="systemConfiguration" value={formData.systemConfiguration} onChange={handleChange} className="task-input-field" />
        </div>
        <br/>
        <div className="create-task-form-input">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className="task-input-field" />
        </div>
        <div className="create-task-form-input">
          <label htmlFor="unitPrice">Unit Price:</label>
          <input type="number" id="unitPrice" name="unitPrice" value={formData.unitPrice} onChange={handleChange} className="task-input-field" />
        </div>
        <div className="create-task-form-input">
          <label htmlFor="invoiceNo">Invoice No:</label>
          <input type="text" id="invoiceNo" name="invoiceNo" value={formData.invoiceNo} onChange={handleChange} className="task-input-field" />
        </div>
        <div className="create-task-form-input">
          <label htmlFor="purchaseDate">Purchase Date:</label>
          <input type="Date" id="purchaseDate" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} className="task-input-field" />
        </div>
        <div className="create-task-form-input">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="Date" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} className="task-input-field" />
        </div>
        <div className="create-task-form-input">
          <label htmlFor="supplierName">Supplier Name:</label>
          <input type="text" id="supplierName" name="supplierName" value={formData.supplierName} onChange={handleChange} className="task-input-field" />
        </div>
        <div className="create-task-form-input">
          <label htmlFor="categoryName">Category Name:</label>
          <input type="text" id="categoryName" name="categoryName" value={formData.categoryName} onChange={handleChange} className="task-input-field" />
        </div>
        <div className="create-task-form-input">
          <label htmlFor="supplierAddress">Supplier Address:</label>
          <input type="text" id="supplierAddress" name="supplierAddress" value={formData.supplierAddress} onChange={handleChange} className="task-input-field" />
        </div>
        <div className="create-task-form-input">
          <label htmlFor="supplierContactNumber">Supplier Contact Number:</label>
          <input type="text" id="supplierContactNumber" name="supplierContactNumber" value={formData.supplierContactNumber} onChange={handleChange} className="task-input-field" />
        </div>
        <button type="submit" className="create-btn">Add</button>
      </form>
    </div>
  
  </div>
  )

};

export default AddInventory;
