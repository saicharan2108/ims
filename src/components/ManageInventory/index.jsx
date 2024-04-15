import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Navbar from "../Navbar";
import "./index.css";

const Inventory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ims-server-63af.onrender.com/api/inventory");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const deleteInventory = async (invoiceNo) => {
    try {
      const response = await fetch(`https://ims-server-63af.onrender.com/api/inventory/${invoiceNo}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }
  
      // Update the state to reflect the deletion
      setData(data.filter(item => item.invoiceNo !== invoiceNo));
      alert('Item deleted successfully');
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }
  

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-main">
        <img
          src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg"
          alt="BEC"
          className="college-logo"
        />
        <div className="greeting-container">
          <p className="greeting-msg">Hi Admin <span className="wave">👋🏻</span></p>
          <h1>Manage Inventory </h1>
        </div>
        <div className="task-container">
          <div className="task-list-container">
            <div>
              <div className="table-header">
                <li className="table-column">Item Name</li>
                <li className="table-column">System Config</li>
                <li className="table-column">Quantity</li>
                <li className="table-column">Invoice No</li>
                <li className="table-column">Purchase Date</li>
                <li className="table-column">Expiry Date</li>
                <li className="table-column">Unit Price</li>
                <li className="table-column">Supplier Contact</li>
                <li className="table-column">Delete</li>
              </div>
              {data.map(task => (
                <div key={task["_id"]} className="task-row">
                  <div className="table-row">{task["itemName"]}</div>
                  <div className="table-row">{task["systemConfiguration"]}</div>
                  <div className="table-row">{task["quantity"]}</div>
                  <div className="table-row">{task["invoiceNo"]}</div>
                  <div className="table-row">{task.purchaseDate ? new Date(task.purchaseDate).toLocaleDateString() : ''}</div>
                  <div className="table-row">{task["expiryDate"]}</div>
                  <div className="table-row">{task["unitPrice"]}</div>
                  <div className="table-row">{task["supplierContactNumber"]}</div>
                  <div className="table-row">
                    <button className="delete-btn" onClick={() => deleteInventory(task["invoiceNo"])}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
