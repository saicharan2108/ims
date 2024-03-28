
    import React from "react";
    import { Navigate } from "react-router-dom";
    import Cookies from "js-cookie";
    
    import Navbar from "../Navbar";
    import "./index.css";
    
    const combinedData = [
      {
        "SL No": 1,
        "Category": "Server Room",
        "Lab Name": "-",
        "Department": "Server Room",
        "Sys Config": "-",
        "Quantity": 1,
        "Invoice No": "31/03/2018",
        "Purchase Date": "-",
        "Expiry Date": "-",
        "Unit Price": 141750,
        "Total Price": 2141750
      },
      {
        "SL No": 2,
        "Category": "Server Room",
        "Lab Name": "-",
        "Department": "Server Room",
        "Sys Config": "-",
        "Quantity": 1,
        "Invoice No": "27/06/2011",
        "Purchase Date": "-",
        "Expiry Date": "-",
        "Unit Price": 675000,
        "Total Price": 2675000
      },
      {
        "SL No": 3,
        "Category": "Desktops",
        "Lab Name": "-",
        "Department": "Desktops",
        "Sys Config": "Intel 12th Gen. Core i7 Processor, 16GB DDR4 RAM, 512GB Solid State Drive, Intel UHD Graphics 770, 19.5\" LED Monitor.",
        "Quantity": 32,
        "Invoice No": "$3700290/22-23 & 13/01/2023",
        "Purchase Date": "-",
        "Expiry Date": "-",
        "Unit Price": 59000,
        "Total Price": 1888000
      },
      {
        "SL No": 4,
        "Category": "Desktops",
        "Lab Name": "-",
        "Department": "Desktops",
        "Sys Config": "Intel 12th Gen. Core i7 Processor, 16GB DDR4 RAM, 512GB Solid State Drive, Intel UHD Graphics 770, 19.5\" LED Monitor.",
        "Quantity": 32,
        "Invoice No": "$3700290/22-23 & 13/01/2023",
        "Purchase Date": "-",
        "Expiry Date": "-",
        "Unit Price": 59000,
        "Total Price": 1888000
      },
      {
        "SL No": 5,
        "Category": "Desktops",
        "Lab Name": "-",
        "Department": "Desktops",
        "Sys Config": "Intel 12th Gen. Core i7 Processor, 16GB DDR4 RAM, 512GB Solid State Drive, Intel UHD Graphics 770, 19.5\" LED Monitor.",
        "Quantity": 39,
        "Invoice No": "$3700290/22-23 & 13/01/2023",
        "Purchase Date": "-",
        "Expiry Date": "-",
        "Unit Price": 59000,
        "Total Price": 2301000
      },
      {
        "SL No": 6,
        "Category": "Desktops",
        "Lab Name": "-",
        "Department": "Desktops",
        "Sys Config": "Intel 12th Gen. Core i7 Processor, 16GB DDR4 RAM, 512GB Solid State Drive, Intel UHD Graphics 770, 19.5\" LED Monitor.",
        "Quantity": 1,
        "Invoice No": "$3700290/22-23 & 13/01/2023",
        "Purchase Date": "-",
        "Expiry Date": "-",
        "Unit Price": 59000,
        "Total Price": 1888000
      },
      {
        "SL No": 7,
        "Category": "Desktops",
        "Lab Name": "-",
        "Department": "Desktops",
        "Sys Config": "HP PRO AMD Athlon(tm) II B.28 3.4GHz, 2GB RAM Processor",
        "Quantity": 2,
        "Invoice No": "7032 06/03/2009",
        "Purchase Date": "-",
        "Expiry Date": "-",
        "Unit Price": 29900,
        "Total Price": 59800
      },
      {
        "SL No": 8,
        "Category": "Desktops",
        "Lab Name": "-",
        "Department": "Desktops",
        "Sys Config": "Intel Core i7 7700 processor, 3.2GHz, 16GB RAM Desktops.",
        "Quantity": 1,
        "Invoice No": "VIZ-1549 29/9/2018",
        "Purchase Date": "-",
        "Expiry Date": "-",
        "Unit Price": 55500,
        "Total Price": 55500
      },
      {
        "SL No": 9,
        "Category": "Desktops",
        "Lab Name": "-",
        "Department": "Desktops",
        "Sys Config": "Intel Core i3 3210 processor, 3.4 GHz, 4GB RAM desktops.",
        "Quantity": 1,
        "Invoice No": "HO-02 29/03/2011",
        "Purchase Date": "-",
        "Expiry Date": "-",
        "Unit Price": 25850,
        "Total Price": 25850
      },
      {
        "SL No": 10,
        "Category": "Pen Tablets",
        "Lab Name": "-",
        "Department": "Pen Tablets",
        "Sys Config": "-",
        "Quantity": 4,
        "Invoice No": "HO-OUT-80 & 31/01/2022",
        "Purchase Date": "-",
        "Expiry Date": "-",
        "Unit Price": 5841,
        "Total Price": 23364
      },
      {
        "SL No": 11,
        "Category": "AC unit",
        "Lab Name": "-",
        "Department": "AC unit",
        "Sys Config": "-",
        "Quantity": 1,
        "Invoice No": "VJA2122-250 & 28/07/2021",
        "Purchase Date": "-",
        "Expiry Date": "-",
        "Unit Price": 36700,
        "Total Price": 36700
      },
      {
        "SL No": 12,
        "Category": "Mic",
        "Lab Name": "-",
        "Department": "Mic",
        "Sys Config": "-",
        "Quantity": 1,
        "Invoice No": "STV/19-20/11371",
        "Purchase Date": "-",
        "Expiry Date": "-",
        "Unit Price": 3644,
        "Total Price": 4300
      },
      {
        "SL No": 13,
        "Category": "Projectors",
        "Lab Name": "-",
        "Department": "Projectors",
        "Sys Config": "-",
        "Quantity": 6,
        "Invoice No": "CORPOUT",
        "Purchase Date": "-",
        "Expiry Date": "-",
        "Unit Price": "-",
        "Total Price":"-"}]
    
 
    
    const Inventory = () => {
      const userDetails = JSON.parse(localStorage.getItem("user"));
      const { name } = userDetails;
    
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
              <p className="greeting-msg">Hi {name.split(" ")[0]},</p>
              <h1>
                Welcome Back <span className="wave">👋🏻</span>
              </h1>
            </div>
            <div className="task-container">
              <div className="task-list-container">
                <div>
                  <div className="table-header">
                    <li className="table-column">SL No.</li>
                    <li className="table-column">Item Name</li>
                    <li className="table-column">System Config</li>
                    <li className="table-column">Quantity</li>
                    <li className="table-column">Invoice No</li>
                    <li className="table-column">Purchase Date</li>
                    <li className="table-column">Expiry Date</li>
                    <li className="table-column">Unit Price</li>
                    <li className="table-column">Total</li>
                    <li className="table-column">Edit</li>
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
                      <button className="table-row edit-btn">Edit</button>
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
    