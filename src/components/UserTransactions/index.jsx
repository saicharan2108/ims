import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import './index.css';
import 'reactjs-popup/dist/index.css';
import Navbar from '../Navbar';
import UserNavbar from '../UserNavbar';

const UserTransactions = () => {
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
      <UserNavbar />
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
            </div>
            {inventoryData.map((item) => (
              <div key={item._id} className="task-row">
                <div className="table-row-id">{item.itemName}</div>
                <div className="table-row">{item.departmentName}</div>
                <div className="table-row">{item.room}</div>
                <div className="table-row">{item.quantity}</div>
               <div className="table-row">{item.updatedQuantity}</div>
                <div className="table-row">{item.date ? new Date(item.date).toLocaleDateString() : ''}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTransactions;
