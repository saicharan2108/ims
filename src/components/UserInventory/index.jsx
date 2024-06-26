import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Navbar from "../Navbar";
import "./index.css";
import UserNavbar from "../UserNavbar";

const UserInventory = () => {
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


  return (
    <div className="home-container">
      <UserNavbar />
      <div className="home-main">
        <img
          src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg"
          alt="BEC"
          className="college-logo"
        />
        <div className="greeting-container">
          <p className="greeting-msg">Hi Admin</p>
          <h1>Welcome Back <span className="wave">👋🏻</span></h1>
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
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInventory;
