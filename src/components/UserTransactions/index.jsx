import React, { useState } from 'react';
import Popup from 'reactjs-popup';

import './index.css';
import 'reactjs-popup/dist/index.css';
import UserNavbar from '../UserNavbar';

const InventoryData = [
  {
    "slNo": 1,
    "itemName": "Laptop",
    "purchaseDate": "2024-03-15",
    "invoiceDate": "2024-03-16",
    "supplier": "ABC Inc.",
    "supplierNumber": "1234567890",
    "department": "CSE"
  },
  {
    "slNo": 2,
    "itemName": "Printer",
    "purchaseDate": "2024-03-20",
    "invoiceDate": "2024-03-21",
    "supplier": "XYZ Corp.",
    "supplierNumber": "9876543210",
    "department": "EEE"
  },
  {
    "slNo": 3,
    "itemName": "Monitor",
    "purchaseDate": "2024-03-25",
    "invoiceDate": "2024-03-26",
    "supplier": "Tech Suppliers",
    "supplierNumber": "6543210987",
    "department": "ME"
  },
  {
    "slNo": 4,
    "itemName": "Desk",
    "purchaseDate": "2024-03-10",
    "invoiceDate": "2024-03-11",
    "supplier": "Furniture Inc.",
    "supplierNumber": "0987654321",
    "department": "CE"
  },
  {
    "slNo": 5,
    "itemName": "Projector",
    "purchaseDate": "2024-03-18",
    "invoiceDate": "2024-03-19",
    "supplier": "Visual Tech",
    "supplierNumber": "4567890123",
    "department": "ECE"
  },
  {
    "slNo": 6,
    "itemName": "Chair",
    "purchaseDate": "2024-03-22",
    "invoiceDate": "2024-03-23",
    "supplier": "Comfort Furnishings",
    "supplierNumber": "1357924680",
    "department": "AE"
  },
  {
    "slNo": 7,
    "itemName": "Desktop",
    "purchaseDate": "2024-03-05",
    "invoiceDate": "2024-03-06",
    "supplier": "Tech Mart",
    "supplierNumber": "2468013579",
    "department": "IT"
  },
  {
    "slNo": 8,
    "itemName": "Scanner",
    "purchaseDate": "2024-03-28",
    "invoiceDate": "2024-03-29",
    "supplier": "Scan Solutions",
    "supplierNumber": "8024679135",
    "department": "CSE"
  },
  {
    "slNo": 9,
    "itemName": "Server",
    "purchaseDate": "2024-03-12",
    "invoiceDate": "2024-03-13",
    "supplier": "Server Inc.",
    "supplierNumber": "1230987456",
    "department": "EEE"
  },
  {
    "slNo": 10,
    "itemName": "Table",
    "purchaseDate": "2024-03-24",
    "invoiceDate": "2024-03-25",
    "supplier": "Furniture Plus",
    "supplierNumber": "6789012345",
    "department": "ME"
  }
];

const UserTransactions = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    purchaseDate: '',
    invoiceDate: '',
    supplier: '',
    supplierNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <UserNavbar/>
      <div className="task-container-add">
        <form className="add-dept" onSubmit={handleSubmit}>
        <div className="create-task-form-input">
            <label htmlFor="departmentName">Select The Department Name:</label>
            <select id="departmentName" className="task-input-field" onChange={handleChange} name="departmentName" value={formData.departmentName}>
              <option value="CSE" className="task-input-field">CSE</option>
              <option value="EEE" className="task-input-field">EEE</option>
              <option value="ME" className="task-input-field">ME</option>
              <option value="CE" className="task-input-field">CE</option>
              <option value="ECE" className="task-input-field">ECE</option>
              <option value="AE" className="task-input-field">AE</option>
              <option value="IT" className="task-input-field">IT</option>
            </select>
          </div>
          <button type="submit" className="add-dept-btn">Search</button>
        </form>
        <div className="task-list-container">
          <div>
            <div className="table-header">
              <li className="table-column">SL No.</li>
              <li className="table-column">Item Name</li>
              <li className="table-column">Purchase Date</li>
              <li className="table-column">Invoice Date</li>
              <li className="table-column">Supplier</li>
              <li className="table-column">Supplier Number</li>
              
            </div>
            {InventoryData.map(item => (
              <div key={item.slNo} className="task-row">
                <div className="table-row">{item.slNo}</div>
                <div className="table-row">{item.itemName}</div>
                <div className="table-row">{item.purchaseDate}</div>
                <div className="table-row">{item.invoiceDate}</div>
                <div className="table-row">{item.supplier}</div>
                <div className="table-row">{item.supplierNumber}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTransactions;
