import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import './index.css';
import 'reactjs-popup/dist/index.css';
import Navbar from '../Navbar';

const ManageInventoryForm = () => {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    fetchInventoryData();
  }, []);

  const handleDelete = async (itemName) => {
    try {
      const response = await fetch(`http://localhost:3030/api/issues/${itemName}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        // Update inventory data after successful deletion
        alert("Transaction deleted successfully")
        fetchInventoryData();

      } else {
        console.error('Error deleting inventory items');
      }
    } catch (error) {
      console.error('Error deleting inventory items:', error);
    }
  };

  const fetchInventoryData = async () => {
    try {
      const response = await fetch('http://localhost:3030/api/issue/store');
      const data = await response.json();
      setInventoryData(data);

    } catch (error) {
      console.error('Error fetching inventory data:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="task-container-add">
      <h1 className='page-title'>Transaction History</h1>
        <div className="task-list-container">
          <div>
            <div className="table-header">
              <li className="table-column-id">Item ID</li>
              <li className="table-column">Department Name</li>
              <li className="table-column">Room</li>
              <li className="table-column">Issued</li>
               <li className="table-column">Remaining</li>

              <li className="table-column">Date</li>
              <li className="table-column">Delete</li>
            </div>
            {inventoryData.map((item) => (
              <div key={item._id} className="task-row">
                <div className="table-row-id">{item.itemName}</div>
                <div className="table-row">{item.departmentName}</div>
                <div className="table-row">{item.room}</div>
                <div className="table-row">{item.quantity}</div>
                 <div className="table-row">{item.updatedQuantity}</div>
                <div className="table-row">{item.date ? new Date(item.date).toLocaleDateString() : ''}</div>
           {/* <Popup trigger={<div className='table-row'><button className="edit-btn">Edit</button></div>} position="right center">
                  <div className='popup-container'>
                    <h1 className="popup-title">Edit Inventory Item</h1>
                    <br />
                    <div className='popup-label-input'>
                      <label className="popup-label">Category</label>
                      <input type="text" value={item.category} className="popup-input" />
                    </div>
                    <div className='popup-label-input'>
                      <label className="popup-label">Item Name</label>
                      <input type="text" value={item.itemName} className="popup-input" />
                    </div>
                    <div className='popup-label-input'>
                      <label className="popup-label">Department Name</label>
                      <input type="text" value={item.departmentName} className="popup-input" />
                    </div>
                    <div className='popup-label-input'>
                      <label className="popup-label">Lab Name</label>
                      <input type="text" value={item.labName} className="popup-input" />
                    </div>
                    <div className='popup-label-input'>
                      <label className="popup-label">Year</label>
                      <input type="text" value={item.year} className="popup-input" />
                    </div>
                    <div className='popup-label-input'>
                      <label className="popup-label">Month Name</label>
                      <input type="text" value={item.monthName} className="popup-input" />
                    </div>
                    <button type="button" className="edit-btn">Update</button>
                  </div>
                </Popup> */}
                <div className='table-row'>
                  <button className="delete-btn" onClick={() => handleDelete(item.itemName)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageInventoryForm;
