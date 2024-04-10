import React, { useState, useEffect } from "react";
import "./index.css";
import Popup from 'reactjs-popup';

const CanteenInventoryManage = () => {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null); // State to store the currently edited item

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3030/api/add/canteen/store");
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
      const response = await fetch(`http://localhost:3030/api/delete/canteen/store/${id}`, {
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
      const response = await fetch(`http://localhost:3030/api/edit/canteen/store/${id}`, {
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
          <div className="table-column">Edit</div>
          <div className="table-column">Delete</div>
        </div>
        {data.map(item => (
          <div key={item._id} className="table-row-container">
            <div className="table-row">{item.itemName}</div>
            <div className="table-row">{item.description}</div>
            <div className="table-row">{item.itemCategory}</div>
            <div className="table-row">{item.quantity}</div>
            <div className="table-row">{item.unitPrice}</div>
            <div className="table-row">{item.totalCost}</div>
            <div className="table-row">{item.purchaseDate ? new Date(item.purchaseDate).toLocaleDateString() : ''}</div>

            <div className="table-row">{item.supplierName}</div>
            <div className="table-row">{item.supplierAddress}</div>
            <div className="table-row">{item.supplierContact}</div>
            <div className="table-row">
              <Popup trigger={<button type="button" className="edit-btn">Edit</button>} position="right center">
                {/* Popup content */}
                <div className='popup-container'>
                  <h1 className="popup-title">Edit Item</h1>
                  <br/>
                  <div className='popup-label-input'>
                    <label className="popup-label">Item Name</label>
                    <input type="text" value={editItem ? editItem.itemName : ''} className="popup-input" onChange={(e) => handleEditChange(e, 'itemName')} />
                  </div>
                  <div className='popup-label-input'>
                    <label className="popup-label">Description</label>
                    <input type="text" value={editItem ? editItem.description : ''} className="popup-input" onChange={(e) => handleEditChange(e, 'description')} />
                  </div>
                  <div className='popup-label-input'>
                    <label className="popup-label">Item Category</label>
                    <input type="text" value={editItem ? editItem.itemCategory : ''} className="popup-input" onChange={(e) => handleEditChange(e, 'itemCategory')} />
                  </div>
                  <div className='popup-label-input'>
                    <label className="popup-label">Quantity</label>
                    <input type="number" value={editItem ? editItem.quantity : ''} className="popup-input" onChange={(e) => handleEditChange(e, 'quantity')} />
                  </div>
                  <div className='popup-label-input'>
                    <label className="popup-label">Unit Price</label>
                    <input type="number" value={editItem ? editItem.unitPrice : ''} className="popup-input" onChange={(e) => handleEditChange(e, 'unitPrice')} />
                  </div>
                  <div className='popup-label-input'>
                    <label className="popup-label">Total Cost</label>
                    <input type="number" value={editItem ? editItem.totalCost : ''} className="popup-input" onChange={(e) => handleEditChange(e, 'totalCost')} />
                  </div>
                  <div className='popup-label-input'>
                    <label className="popup-label">Purchase Date</label>
                    <input type="Date" value={editItem ? editItem.purchaseDate : ''} className="popup-input" onChange={(e) => handleEditChange(e, 'purchaseDate')} />
                  </div>
                  <div className='popup-label-input'>
                    <label className="popup-label">Supplier Name</label>
                    <input type="text" value={editItem ? editItem.supplierName : ''} className="popup-input" onChange={(e) => handleEditChange(e, 'supplierName')} />
                  </div>
                  <div className='popup-label-input'>
                    <label className="popup-label">Supplier Address</label>
                    <input type="text" value={editItem ? editItem.supplierAddress : ''} className="popup-input" onChange={(e) => handleEditChange(e, 'supplierAddress')} />
                  </div>
                  <div className='popup-label-input'>
                    <label className="popup-label">Supplier Contact</label>
                    <input type="text" value={editItem ? editItem.supplierContact : ''} className="popup-input" onChange={(e) => handleEditChange(e, 'supplierContact')} />
                  </div>
                  <button type="button" className="edit-btn" onClick={() => editInventory(item._id)}>Update</button>

                </div>
              </Popup>
            </div>
            <div className="table-row">
              <button className="delete-btn" onClick={() => deleteInventory(item._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanteenInventoryManage;
