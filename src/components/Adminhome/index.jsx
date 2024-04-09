import React, { useState } from "react";
import Navbar from "../Navbar";
import CanteenInventoryManage from "../CanteenInventoryManage";
import CanteenInventoryAdd from "../CanteenInventoryAdd";
import DepartmentStoreInventoryManage from "../DepartmentStoreInventoryManage";
import DepartmentStoreInventoryAdd from "../DepartmentStoreInventoryAdd";
import LabEquipmentManage from "../LabEquipmentManage";
import LabEquipmentAdd from "../LabEquipmentAdd";

import "./index.css";

const AdminHome = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedAction, setSelectedAction] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSelectedAction("");
    setSelectedDropdown(item); // Set selected dropdown when item changes
  };

  const handleActionClick = (action) => {
    setSelectedAction(action);
  };

  const renderComponent = () => {
    switch (selectedItem + selectedAction) {
      case "Department Store inventoryAdd":
        return <DepartmentStoreInventoryAdd />;
      case "Department Store inventoryManage":
        return <DepartmentStoreInventoryManage />;
      case "Lab EquipmentAdd":
        return <LabEquipmentAdd />;
      case "Lab EquipmentManage":
        return <LabEquipmentManage />;
      case "Canteen InventoryAdd":
        return <CanteenInventoryAdd />;
      case "Canteen InventoryManage":
        return <CanteenInventoryManage />;
      default:
        return null;
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-main">
        <img
          src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg"
          alt="BEC"
          className="admin-college-logo"
        />
        <div className="greeting-container">
          <h1>Welcome to Admin Home</h1>
        </div>
        <div className="dropdowns-container">
          <div className="dropdown">
            <button className={`dropdown-button ${selectedDropdown === "Department Store inventory" && "active"}`} onClick={() => handleItemClick("Department Store inventory")}>
              Department Store Inventory
            </button>
            <div className="dropdown-content">
              <button className={`dropdown-item ${selectedAction === "Add" && selectedDropdown === "Department Store inventory" ? "selected-item" : "un-selected-item"}`} onClick={() => { handleItemClick("Department Store inventory"); setSelectedAction("Add"); }}>
                Add
              </button>
              <button className={`dropdown-item ${selectedAction === "Manage" && selectedDropdown === "Department Store inventory" ? "selected-item" : "un-selected-item"}`} onClick={() => { handleItemClick("Department Store inventory"); setSelectedAction("Manage"); }}>
                Manage
              </button>
            </div>
          </div>
          <div className="dropdown">
            <button className={`dropdown-button ${selectedDropdown === "Lab Equipment" && "active"}`} onClick={() => handleItemClick("Lab Equipment")}>
              Lab Equipment
            </button>
            <div className="dropdown-content">
              <button className={`dropdown-item ${selectedAction === "Add" && selectedDropdown === "Lab Equipment" ? "selected-item" : "un-selected-item"}`} onClick={() => { handleItemClick("Lab Equipment"); setSelectedAction("Add"); }}>
                Add
              </button>
              <button className={`dropdown-item ${selectedAction === "Manage" && selectedDropdown === "Lab Equipment" ? "selected-item" : "un-selected-item"}`} onClick={() => { handleItemClick("Lab Equipment"); setSelectedAction("Manage"); }}>
                Manage
              </button>
            </div>
          </div>
          <div className="dropdown">
            <button className={`dropdown-button ${selectedDropdown === "Canteen Inventory" && "active"}`} onClick={() => handleItemClick("Canteen Inventory")}>
              Canteen Inventory
            </button>
            <div className="dropdown-content">
              <button className={`dropdown-item ${selectedAction === "Add" && selectedDropdown === "Canteen Inventory" ? "selected-item" : "un-selected-item"}`} onClick={() => { handleItemClick("Canteen Inventory"); setSelectedAction("Add"); }}>
                Add
              </button>
              <button className={`dropdown-item ${selectedAction === "Manage" && selectedDropdown === "Canteen Inventory" ? "selected-item" : "un-selected-item"}`} onClick={() => { handleItemClick("Canteen Inventory"); setSelectedAction("Manage"); }}>
                Manage
              </button>
            </div>
          </div>
        </div>
        <div className="component-container">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default AdminHome;
