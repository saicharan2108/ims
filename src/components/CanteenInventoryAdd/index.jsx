import React, { useState } from 'react';
import './index.css';

const CanteenInventoryAdd = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    itemCategory: '',
    quantity: '',
    unitPrice: '',
    purchaseDate: '',
    supplierName: '',
    supplierAddress: '',
    supplierContact: ''
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
      // Calculate total cost based on quantity and unit price
      const totalCost = formData.quantity * formData.unitPrice;

      const response = await fetch('https://ims-server-63af.onrender.com/api/add/canteen/item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, totalCost }), // Include totalCost in the request body
      });
      
      if (response.ok) {
        alert("Item Added to Canteen Inventory");
        setFormData({
          itemName: '',
          description: '',
          itemCategory: '',
          quantity: '',
          unitPrice: '',
          purchaseDate: '',
          supplierName: '',
          supplierAddress: '',
          supplierContact: ''
        });
      } else {
        alert('Failed to add item to Canteen Inventory');
      }
    } catch (error) {
      console.error('Error adding item to Canteen Inventory:', error.message);
      alert('Error adding item to Canteen Inventory:', error.message);
    }
  };

  return (
    <div className='add-items-main-container'>
      <div className="add-canteen-inventory-container">
        <form className="add-inventory-form" onSubmit={handleSubmit}>
          <div className="create-task-form-input">
            <label htmlFor="itemName">Item Name:</label>
            <input type="text" id="itemName" name="itemName" value={formData.itemName} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="itemCategory">Item Category:</label>
            <input type="text" id="itemCategory" name="itemCategory" value={formData.itemCategory} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="unitPrice">Unit Price:</label>
            <input type="number" id="unitPrice" name="unitPrice" value={formData.unitPrice} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="purchaseDate">Purchase Date:</label>
            <input type="Date" id="purchaseDate" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="supplierName">Supplier Name:</label>
            <input type="text" id="supplierName" name="supplierName" value={formData.supplierName} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="supplierAddress">Supplier Address:</label>
            <input type="text" id="supplierAddress" name="supplierAddress" value={formData.supplierAddress} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="supplierContact">Supplier Contact:</label>
            <input type="text" id="supplierContact" name="supplierContact" value={formData.supplierContact} onChange={handleChange} className="task-input-field" />
          </div>
          <br/>
          <button type="submit" className="create-btn">Add to Inventory</button>
        </form>
      </div>
    </div>
  );
};

export default CanteenInventoryAdd;
