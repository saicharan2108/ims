import React, { useState } from 'react';
import './index.css';

const DepartmentStoreInventoryAdd = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    itemCategory: '',
    unitMeasurement: '',
    purchaseDate: '',
    quantity: '',
    unitCost: '',
    condition: '',
    warranty: '',
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
    const { quantity, unitCost } = formData;
    const totalCost = quantity * unitCost;
    const newData = { ...formData, totalCost }; // Add totalCost to form data
    try {
      const response = await fetch('http://localhost:3030/api/add/department/store', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      
      if (response.ok) {
        alert("Inventory Added");
        setFormData({
          itemName: '',
          itemCategory: '',
          unitMeasurement: '',
          purchaseDate: '',
          quantity: '',
          unitCost: '',
          condition: '',
          warranty: '',
          supplierName: '',
          supplierAddress: '',
          supplierContact: ''
        });
      } else {
        alert('Failed to add inventory');
      }
    } catch (error) {
      console.error('Error adding item:', error.message);
      alert('Error adding item:', error.message);
    }
  };


  return (
    <div className='add-items-main-container'>
      <div className="add-inventory-items-container">
        <form className="add-inventory-form" onSubmit={handleSubmit}>
          <div className="create-task-form-input">
            <label htmlFor="itemName">Item Name:</label>
            <input type="text" id="itemName" name="itemName" value={formData.itemName} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="itemCategory">Item Category:</label>
            <input type="text" id="itemCategory" name="itemCategory" value={formData.itemCategory} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="unitMeasurement">Unit Measurement:</label>
            <input type="text" id="unitMeasurement" name="unitMeasurement" value={formData.unitMeasurement} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="purchaseDate">Purchase Date:</label>
            <input type="Date" id="purchaseDate" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="unitCost">Unit Cost:</label>
            <input type="number" id="unitCost" name="unitCost" value={formData.unitCost} onChange={handleChange} className="task-input-field" />
          </div>
        
          <div className="create-task-form-input">
            <label htmlFor="warranty">Warranty:</label>
            <input type="text" id="warranty" name="warranty" value={formData.warranty} onChange={handleChange} className="task-input-field" />
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
          <div className="create-task-form-input">
            <label htmlFor="condition">Condition:</label>
            <select id="condition" name="condition" value={formData.condition} onChange={handleChange} className="task-input-field">
              <option value="" className="task-input-field" >Select Condition</option>
              <option value="New" className="task-input-field">New</option>
              <option value="Repaired" className="task-input-field">Repaired</option>
              <option value="Damaged" className="task-input-field">Damaged</option>
            </select>
          </div>
          <button type="submit" className="create-btn">Add</button>
        </form>
      </div>
    </div>
  );
};

export default DepartmentStoreInventoryAdd;
