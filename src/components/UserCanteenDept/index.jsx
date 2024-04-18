import React, { useState, useEffect } from "react";
import "./index.css";
import Popup from 'reactjs-popup';

const UserCanteenDept = () => {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null); // State to store the currently edited item

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://ims-server-63af.onrender.com/api/add/canteen/store");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteInventory = async (id) => {
    try {
      const response = await fetch(`https://ims-server-63af.onrender.com/api/delete/canteen/store/${id}`, {
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
      const response = await fetch(`https://ims-server-63af.onrender.com/api/edit/canteen/store/${id}`, {
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
      fetchData();
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
          <div className="table-column">Description</div>
          <div className="table-column">Item Category</div>
          <div className="table-column">Quantity</div>
          <div className="table-column">Unit Price</div>
          <div className="table-column">Total Cost</div>
          <div className="table-column">Purchase Date</div>
          <div className="table-column">Supplier Name</div>
          <div className="table-column">Supplier Address</div>
          <div className="table-column">Supplier Contact</div>
        </div>
        {data.map(item => (
          <div key={item._id} className="table-row-container">
            <div className="table-row">{item.itemName}</div>
            <div className="table-row">{item.description}</div>
            <div className="table-row">{item.itemCategory}</div>
            <div className="table-row">{item.quantity}</div>
            <div className="table-row">{item.unitPrice}</div>
            <div className="table-row">{item.quantity * item.unitPrice}</div>
            <div className="table-row">{item.purchaseDate ? new Date(item.purchaseDate).toLocaleDateString() : ''}</div>

            <div className="table-row">{item.supplierName}</div>
            <div className="table-row">{item.supplierAddress}</div>
            <div className="table-row">{item.supplierContact}</div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCanteenDept;
