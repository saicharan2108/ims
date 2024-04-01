import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import './index.css';
import 'reactjs-popup/dist/index.css';
import Navbar from '../Navbar';

const UserTransactions = () => {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    fetchInventoryData();
  }, []);

  

  const fetchInventoryData = async () => {
    try {
      const response = await fetch('http://localhost:3030/api/issues');
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
        <div className="task-list-container">
          <div>
            <div className="table-header">
              <li className="table-column">Category</li>
              <li className="table-column">Item Name</li>
              <li className="table-column">Department Name</li>
              <li className="table-column">Lab Name</li>
              <li className="table-column">Year</li>
              <li className="table-column">Month Name</li>
            </div>
            {inventoryData.map((item) => (
              <div key={item._id} className="task-row">
                <div className="table-row">{item.category}</div>
                <div className="table-row">{item.itemName}</div>
                <div className="table-row">{item.departmentName}</div>
                <div className="table-row">{item.labName}</div>
                <div className="table-row">{item.year}</div>
                <div className="table-row">{item.monthName}</div>
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
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTransactions;
