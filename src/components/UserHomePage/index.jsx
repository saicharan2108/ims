import React, { useState } from "react";
import Navbar from "../Navbar";
import UserDepartmentStore from "../UserDepartmentStore";
import UserCanteenDept from "../UserCanteenDept";
import UserLabEquipment from "../UserLabEquipment";

import "./index.css";
import UserNavbar from "../UserNavbar";

const UserHomePage = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case "Department Store inventory":
        return <UserDepartmentStore />;
      case "Lab Equipment":
        return <UserLabEquipment />;
      case "Canteen Inventory":
        return <UserCanteenDept />;
      default:
        return null;
    }
  };

  return (
    <div className="home-container">
      <UserNavbar />
      <div className="home-main">
        <img
          src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg"
          alt="BEC"
          className="admin-college-logo"
        />
        <div className="greeting-container">
          <h1>Welcome to User Home</h1>
        </div>
        <div className="dropdowns-container">
          <div className="dropdown">
            <button className={`dropdown-button ${selectedItem === "Department Store inventory" && "active"}`} onClick={() => handleItemClick("Department Store inventory")}>
              Department Store Inventory
            </button>
          </div>
          <div className="dropdown">
            <button className={`dropdown-button ${selectedItem === "Lab Equipment" && "active"}`} onClick={() => handleItemClick("Lab Equipment")}>
              Lab Equipment
            </button>
          </div>
          <div className="dropdown">
            <button className={`dropdown-button ${selectedItem === "Canteen Inventory" && "active"}`} onClick={() => handleItemClick("Canteen Inventory")}>
              Canteen Inventory
            </button>
          </div>
        </div>
        <div className="component-container">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default UserHomePage;
