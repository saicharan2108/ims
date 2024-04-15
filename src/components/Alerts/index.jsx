import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import './index.css';
import 'reactjs-popup/dist/index.css';
import Navbar from '../Navbar';

const Alerts = () => {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    fetchInventoryData();
  }, []);

  const handleDelete = async (itemName) => {
    try {
      const response = await fetch(`https://ims-server-63af.onrender.com/api/issues/${itemName}`, {
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
      const response = await fetch('https://ims-server-63af.onrender.com/add/department/store');
      const data = await response.json();
      // Filter items with quantity less than 5
      const filteredData = data.filter(item => parseInt(item.quantity) < 5);
      setInventoryData(filteredData);
    } catch (error) {
      console.error('Error fetching inventory data:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="task-container-add">
      <h1 className='page-title'>Alerts</h1>
        <div className="task-list-container">
          <div>
            <div className="table-header">
              <li className="table-column">Item Name</li>
              <li className="table-column">Category</li>
              <li className="table-column">Quantity</li>
              <li className="table-column">Unit Measurement</li>
              <li className="table-column">Purchase Date</li>
              <li className="table-column">Delete</li>
            </div>
            {inventoryData.map((item) => (
              <div key={item._id} className="task-row">
                <div className="table-row">{item.itemName}</div>
                <div className="table-row">{item.itemCategory}</div>
                <div className="table-row">{item.quantity}</div>
                <div className="table-row">{item.unitMeasurement}</div>
                <div className="table-row">{item.purchaseDate ? new Date(item.purchaseDate).toLocaleDateString() : ''}</div>

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

export default Alerts;
