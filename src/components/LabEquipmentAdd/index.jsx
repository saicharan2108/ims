import React, { useState } from 'react';
import './index.css';

const LabEquipmentAdd = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    sysConfig: '',
    quantity: '',
    unitPrice: '',
    totalCost: '',
    invoiceNo: '',
    purchaseDate: '',
    warranty: '',
    supplierName:'',
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
      const response = await fetch('http://localhost:3030/api/add/lab/equipment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert("Equipment Added");
        setFormData({
          itemName: '',
          sysConfig: '',
          quantity: '',
          unitPrice: '',
          totalCost: '',
          invoiceNo: '',
          purchaseDate: '',
          warranty: '',
          supplierName:'',
          supplierAddress: '',
          supplierContact: ''
        });
      } else {
        alert('Failed to add equipment');
      }
    } catch (error) {
      console.error('Error adding equipment:', error.message);
      alert('Error adding equipment:', error.message);
    }
  };

  return (
    <div className='add-items-main-container'>
      <div className="add-lab-equipment-container">
        <form className="add-equipment-form" onSubmit={handleSubmit}>
          <div className="create-task-form-input">
            <label htmlFor="itemName">Item Name:</label>
            <input type="text" id="itemName" name="itemName" value={formData.itemName} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="sysConfig">System Configuration:</label>
            <input type="text" id="sysConfig" name="sysConfig" value={formData.sysConfig} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="quantity">Quantity:</label>
            <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="unitPrice">Unit Price:</label>
            <input type="text" id="unitPrice" name="unitPrice" value={formData.unitPrice} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="totalCost">Total Cost:</label>
            <input type="text" id="totalCost" name="totalCost" value={formData.totalCost} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="invoiceNo">Invoice No:</label>
            <input type="text" id="invoiceNo" name="invoiceNo" value={formData.invoiceNo} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="purchaseDate">Purchase Date:</label>
            <input type="text" id="purchaseDate" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} className="task-input-field" />
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
          <button type="submit" className="create-btn">Add</button>
        </form>
      </div>
    </div>
  );
};

export default LabEquipmentAdd;
