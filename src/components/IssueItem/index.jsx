import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from '../Navbar';

const IssueItem = () => {
  const [formData, setFormData] = useState({
    storeType: '',
    itemName: '',
    departmentName: '',
    room: '',
    unitIn:'',
    quantity: '',
    date: ''
  });
  const [itemNames, setItemNames] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchItemNames();
    fetchDepartments();
  }, [formData.storeType]);

  useEffect(() => {
    if (formData.departmentName) {
      const selectedDepartment = departments.find(department => department.departmentName === formData.departmentName);
      if (selectedDepartment) {
        setRooms(selectedDepartment.rooms);
      }
    }
  }, [formData.departmentName, departments]);

  const fetchItemNames = async () => {
    if (formData.storeType) {
      try {
        const response = await fetch(`http://localhost:3030/api/add/${formData.storeType.toLowerCase()}/store`);
        if (response.ok) {
          const data = await response.json();
          setItemNames(data);
        } else {
          console.error('Failed to fetch item names:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching item names:', error);
      }
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await fetch('http://localhost:3030/api/departments');
      if (response.ok) {
        const data = await response.json();
        const uniqueDepartments = [...new Set(data.map(department => department.departmentName))];
        setDepartments(uniqueDepartments.map(departmentName => ({
          departmentName: departmentName,
          rooms: data.filter(department => department.departmentName === departmentName).map(department => department.roomNo)
        })));
      } else {
        console.error('Failed to fetch departments:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Find the selected item object from itemNames state
    const selectedItem = itemNames.find(item => item._id === formData.itemName);
    
    // Check if the issued quantity is greater than the available quantity
    if (parseInt(formData.quantity) > selectedItem.quantity) {
      alert('Insufficient stock!');
      return;
    }
  
    // Calculate the updated quantity by subtracting the issued quantity from the current quantity
    const updatedQuantity = selectedItem.quantity - parseInt(formData.quantity);
  
    // Update the formData object to include the updatedQuantity
    const updatedFormData = {
      ...formData,
      updatedQuantity: updatedQuantity, // Updated quantity
      itemCategory: selectedItem.itemCategory,
      unitMeasurement: selectedItem.unitMeasurement,
      purchaseDate: selectedItem.purchaseDate,
      unitCost: selectedItem.unitCost,
      totalCost: selectedItem.totalCost,
      condition: selectedItem.condition,
      warranty: selectedItem.warranty,
      supplierName: selectedItem.supplierName,
      supplierAddress: selectedItem.supplierAddress,
      supplierContact: selectedItem.supplierContact
    };
  
    try {
      // Call the update API to decrease the quantity based on the ID
      await fetch(`https://ims-server-63af.onrender.com/api/update/${formData.storeType.toLowerCase()}/${formData.itemName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: updatedQuantity }),
      });
  
      // Post the issued data to the new database
      const response = await fetch('https://ims-server-63af.onrender.com/api/issue/store', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData), // Send updatedFormData
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
        <h1 className='page-title'>Issue Item</h1>
        <form className="add-dept" onSubmit={handleSubmit}>
          <div className="create-task-form-input">
            <label htmlFor="storeType">Select Store Type:</label>
            <select id="storeType" name="storeType" value={formData.storeType} onChange={handleChange} className="task-input-field">
              <option value="">Select Store Type</option>
              <option value="Canteen">Canteen Store</option>
              <option value="Lab">Lab Store</option>
              <option value="Department">Department Store</option>
            </select>
          </div>
          {formData.storeType && (
            <div className="create-task-form-input">
              <label htmlFor="itemName">Select Item Name:</label>
              <select id="itemName" name="itemName" value={formData.itemName} onChange={handleChange} className="task-input-field">
                <option value="">Select Item Name</option>
                {itemNames.map((item) => (
                  <option key={item._id} value={item._id}>{item.itemName}</option>
                ))}
              </select>
            </div>
          )}
          {formData.storeType && (
            <div className="create-task-form-input">
              <label htmlFor="departmentName">Select Department:</label>
              <select id="departmentName" name="departmentName" value={formData.departmentName} onChange={handleChange} className="task-input-field">
                <option value="">Select Department</option>
                {departments.map((department) => (
                  <option key={department.departmentName} value={department.departmentName}>{department.departmentName}</option>
                ))}
              </select>
            </div>
          )}
          {formData.departmentName && (
            <div className="create-task-form-input">
              <label htmlFor="room">Room:</label>
              <select id="room" name="room" value={formData.room} onChange={handleChange} className="task-input-field">
                <option value="">Select Room</option>
                {rooms.map((room) => (
                  <option key={room} value={room}>{room}</option>
                ))}
              </select>
            </div>
          )}
          <div className="create-task-form-input">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className="task-input-field" />
          </div>
          <div className="create-task-form-input">
            <label htmlFor="unitIn">Unit In</label>
            <input type="text" id="unitIn" name="unitIn" value={formData.unitIn} onChange={handleChange} className="task-input-field" placeholder='Ex: Kg, Ltr'/>
          </div>
          <div className="create-task-form-input">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="task-input-field" />
          </div>
          <button type="submit" className="add-dept-btn" >Issue</button>
        </form>
      </div>
    </>
  );
};

export default IssueItem;
