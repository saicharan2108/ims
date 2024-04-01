
import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import UserNavbar from "../UserNavbar";
import "./index.css";
    
   const combinedData = [
    {
      "SL No": 1,
      "Category": "Server Room",
      "Lab Name": "-",
      "Department": "IT",
      "Sys Config": "Standard",
      "Quantity": 1,
      "Invoice No": "1234",
      "Purchase Date": "01/01/2023",
      "Expiry Date": "-",
      "Unit Price": 15000,
      "Total Price": 15000
    },
    {
      "SL No": 2,
      "Category": "Desktop",
      "Lab Name": "Lab1",
      "Department": "CompSci",
      "Sys Config": "Gaming",
      "Quantity": 5,
      "Invoice No": "5678",
      "Purchase Date": "02/02/2023",
      "Expiry Date": "-",
      "Unit Price": 1000,
      "Total Price": 5000
    },
    {
      "SL No": 3,
      "Category": "Printer",
      "Lab Name": "Lab2",
      "Department": "Physics",
      "Sys Config": "LaserJet",
      "Quantity": 2,
      "Invoice No": "91011",
      "Purchase Date": "03/03/2023",
      "Expiry Date": "-",
      "Unit Price": 5000,
      "Total Price": 10000
    },
    {
      "SL No": 4,
      "Category": "Projector",
      "Lab Name": "Lab3",
      "Department": "Engineering",
      "Sys Config": "HD",
      "Quantity": 1,
      "Invoice No": "121314",
      "Purchase Date": "04/04/2023",
      "Expiry Date": "-",
      "Unit Price": 8000,
      "Total Price": 8000
    },
    {
      "SL No": 5,
      "Category": "Scanner",
      "Lab Name": "Lab4",
      "Department": "Chemistry",
      "Sys Config": "Flatbed",
      "Quantity": 1,
      "Invoice No": "151617",
      "Purchase Date": "05/05/2023",
      "Expiry Date": "-",
      "Unit Price": 3000,
      "Total Price": 3000
    },
    {
      "SL No": 6,
      "Category": "Switch",
      "Lab Name": "Lab5",
      "Department": "Biology",
      "Sys Config": "24-Port",
      "Quantity": 3,
      "Invoice No": "181920",
      "Purchase Date": "06/06/2023",
      "Expiry Date": "-",
      "Unit Price": 7000,
      "Total Price": 21000
    },
    {
      "SL No": 7,
      "Category": "Server",
      "Lab Name": "Lab6",
      "Department": "Mathematics",
      "Sys Config": "Rackmount",
      "Quantity": 1,
      "Invoice No": "212223",
      "Purchase Date": "07/07/2023",
      "Expiry Date": "-",
      "Unit Price": 12000,
      "Total Price": 12000
    },
    {
      "SL No": 8,
      "Category": "Laptop",
      "Lab Name": "Lab7",
      "Department": "Geography",
      "Sys Config": "Ultrabook",
      "Quantity": 4,
      "Invoice No": "242526",
      "Purchase Date": "08/08/2023",
      "Expiry Date": "-",
      "Unit Price": 9000,
      "Total Price": 36000
    },
    {
      "SL No": 9,
      "Category": "Router",
      "Lab Name": "Lab8",
      "Department": "History",
      "Sys Config": "Dual-Band",
      "Quantity": 2,
      "Invoice No": "272829",
      "Purchase Date": "09/09/2023",
      "Expiry Date": "-",
      "Unit Price": 6000,
      "Total Price": 12000
    },
    {
      "SL No": 10,
      "Category": "UPS",
      "Lab Name": "Lab9",
      "Department": "Languages",
      "Sys Config": "Line-Interactive",
      "Quantity": 1,
      "Invoice No": "303132",
      "Purchase Date": "10/10/2023",
      "Expiry Date": "-",
      "Unit Price": 8000,
      "Total Price": 8000
    }
  ]
  
    
 
    
    const UserInventory = () => {
      // const userDetails = JSON.parse(localStorage.getItem("user"));
      // const { name } = userDetails;
    
      return (
        <div className="home-container">
          <UserNavbar />
          <div className="home-main">
            <img
              src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg"
              alt="BEC"
              className="user-i-college-logo"
            />
            <div className="greeting-container">
              <p className="greeting-msg">Hi 
              
               {/* {name.split(" ")[0]}, */}
               </p>
              <h1>
                Welcome Back <span className="wave">👋🏻</span>
              </h1>
            </div>
            <div className="task-container">
              <div className="task-list-container">
                <div>
                  <div className="table-header">
                    <li className="table-column">SL No.</li>
                    <li className="table-column">Department Name</li>
                    <li className="table-column">System Config</li>
                    <li className="table-column">Quantity</li>
                    <li className="table-column">Invoice No</li>
                    <li className="table-column">Purchase Date</li>
                    <li className="table-column">Expiry Date</li>
                    <li className="table-column">Unit Price</li>
                    <li className="table-column">Total</li>
                  </div>
                  {combinedData.map(task => (
                    <div key={task["SL No"]} className="task-row">
                      <div className="table-row">{task["SL No"]}</div>
                      <div className="table-row">{task["Department"]}</div>
                      <div className="table-row">{task["Sys Config"]}</div>
                      <div className="table-row">{task["Quantity"]}</div>
                      <div className="table-row">{task["Invoice No"]}</div>
                      <div className="table-row">{task["Purchase Date"]}</div>
                      <div className="table-row">{task["Expiry Date"]}</div>
                      <div className="table-row">{task["Unit Price"]}</div>
                      <div className="table-row">{task["Total Price"]}</div>
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
    