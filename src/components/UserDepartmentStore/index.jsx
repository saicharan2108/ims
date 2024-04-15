import React, { useState, useEffect } from "react";
import "./index.css";
import Popup from 'reactjs-popup';

const DepartmentStoreInventoryManage = () => {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null); // State to store the currently edited item

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://ims-server-63af.onrender.com/api/add/department/store");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteInventory = async (id) => {
    try {
      const response = await fetch(`https://ims-server-63af.onrender.com/api/delete/department/store/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      // Update the state to reflect the deletion
      setData(data.filter(item => item._id !== id));
      alert('Item deleted successfully');
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const editInventory = async (id) => {
    try {
      const response = await fetch(`https://ims-server-63af.onrender.com/api/edit/department/store/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editItem)
      });
  
      if (!response.ok) {
        throw new Error('Failed to edit item');
      }
  
      // Update the state to reflect the changes
      const updatedData = data.map(item => {
        if (item._id === editItem._id) {
          return { ...item, ...editItem };
        }
        return item;
      });
      setData(updatedData);
      fetchData()
      alert('Item edited successfully');
      setEditItem(null); // Close the edit form
    } catch (error) {
      console.error('Error editing item:', error);
    }
  };

  const handleEditChange = (e, field) => {
    const value = e.target.value;
    setEditItem(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  return (
    <div className="inventory-container">
      <div className="inventory-table">
        <div className="table-header">
          <div className="table-column">Item Name</div>
          <div className="table-column">Item Category</div>
          <div className="table-column">Unit Measurement</div>
          <div className="table-column">Purchase Date</div>
          <div className="table-column">Quantity</div>
          <div className="table-column">Unit Cost</div>
          <div className="table-column">Total Cost</div>
          <div className="table-column">Condition</div>
          <div className="table-column">Warranty</div>
          <div className="table-column">Supplier Name</div>
          <div className="table-column">Supplier Address</div>
          <div className="table-column">Supplier Contact</div>
         
        </div>
        {data.map(item => (
          <div key={item._id} className="table-row-container">
            <div className="table-row">{item.itemName}</div>
            <div className="table-row">{item.itemCategory}</div>
            <div className="table-row">{item.unitMeasurement}</div>
            <div className="table-row">{item.purchaseDate ? new Date(item.purchaseDate).toLocaleDateString() : ''}</div>

            <div className="table-row">{item.quantity}</div>
            <div className="table-row">{item.unitCost}</div>
            <div className="table-row">{item.totalCost}</div>
            <div className="table-row">{item.condition}</div>
            <div className="table-row">{item.warranty}</div>
            <div className="table-row">{item.supplierName}</div>
            <div className="table-row">{item.supplierAddress}</div>
            <div className="table-row">{item.supplierContact}</div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentStoreInventoryManage;
