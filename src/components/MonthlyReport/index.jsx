import React, { useState } from 'react';
import './index.css';
import Navbar from '../Navbar';


// const combinedData = [
//   {
//     "SL No": 1,
//     "Category": "Server Room",
//     "Lab Name": "-",
//     "Department": "Server Room",
//     "Sys Config": "-",
//     "Quantity": 1,
//     "Invoice No": "31/03/2018",
//     "Purchase Date": "-",
//     "Expiry Date": "-",
//     "Unit Price": 141750,
//     "Total Price": 2141750
//   },
//   {
//     "SL No": 2,
//     "Category": "Server Room",
//     "Lab Name": "-",
//     "Department": "Server Room",
//     "Sys Config": "-",
//     "Quantity": 1,
//     "Invoice No": "27/06/2011",
//     "Purchase Date": "-",
//     "Expiry Date": "-",
//     "Unit Price": 675000,
//     "Total Price": 2675000
//   },
//   {
//     "SL No": 3,
//     "Category": "Desktops",
//     "Lab Name": "-",
//     "Department": "Desktops",
//     "Sys Config": "Intel 12th Gen. Core i7 Processor, 16GB DDR4 RAM, 512GB Solid State Drive, Intel UHD Graphics 770, 19.5\" LED Monitor.",
//     "Quantity": 32,
//     "Invoice No": "$3700290/22-23 & 13/01/2023",
//     "Purchase Date": "-",
//     "Expiry Date": "-",
//     "Unit Price": 59000,
//     "Total Price": 1888000
//   },
//   {
//     "SL No": 4,
//     "Category": "Desktops",
//     "Lab Name": "-",
//     "Department": "Desktops",
//     "Sys Config": "Intel 12th Gen. Core i7 Processor, 16GB DDR4 RAM, 512GB Solid State Drive, Intel UHD Graphics 770, 19.5\" LED Monitor.",
//     "Quantity": 32,
//     "Invoice No": "$3700290/22-23 & 13/01/2023",
//     "Purchase Date": "-",
//     "Expiry Date": "-",
//     "Unit Price": 59000,
//     "Total Price": 1888000
//   },
//   {
//     "SL No": 5,
//     "Category": "Desktops",
//     "Lab Name": "-",
//     "Department": "Desktops",
//     "Sys Config": "Intel 12th Gen. Core i7 Processor, 16GB DDR4 RAM, 512GB Solid State Drive, Intel UHD Graphics 770, 19.5\" LED Monitor.",
//     "Quantity": 39,
//     "Invoice No": "$3700290/22-23 & 13/01/2023",
//     "Purchase Date": "-",
//     "Expiry Date": "-",
//     "Unit Price": 59000,
//     "Total Price": 2301000
//   },
//   {
//     "SL No": 6,
//     "Category": "Desktops",
//     "Lab Name": "-",
//     "Department": "Desktops",
//     "Sys Config": "Intel 12th Gen. Core i7 Processor, 16GB DDR4 RAM, 512GB Solid State Drive, Intel UHD Graphics 770, 19.5\" LED Monitor.",
//     "Quantity": 1,
//     "Invoice No": "$3700290/22-23 & 13/01/2023",
//     "Purchase Date": "-",
//     "Expiry Date": "-",
//     "Unit Price": 59000,
//     "Total Price": 1888000
//   },
//   {
//     "SL No": 7,
//     "Category": "Desktops",
//     "Lab Name": "-",
//     "Department": "Desktops",
//     "Sys Config": "HP PRO AMD Athlon(tm) II B.28 3.4GHz, 2GB RAM Processor",
//     "Quantity": 2,
//     "Invoice No": "7032 06/03/2009",
//     "Purchase Date": "-",
//     "Expiry Date": "-",
//     "Unit Price": 29900,
//     "Total Price": 59800
//   },
//   {
//     "SL No": 8,
//     "Category": "Desktops",
//     "Lab Name": "-",
//     "Department": "Desktops",
//     "Sys Config": "Intel Core i7 7700 processor, 3.2GHz, 16GB RAM Desktops.",
//     "Quantity": 1,
//     "Invoice No": "VIZ-1549 29/9/2018",
//     "Purchase Date": "-",
//     "Expiry Date": "-",
//     "Unit Price": 55500,
//     "Total Price": 55500
//   },
//   {
//     "SL No": 9,
//     "Category": "Desktops",
//     "Lab Name": "-",
//     "Department": "Desktops",
//     "Sys Config": "Intel Core i3 3210 processor, 3.4 GHz, 4GB RAM desktops.",
//     "Quantity": 1,
//     "Invoice No": "HO-02 29/03/2011",
//     "Purchase Date": "-",
//     "Expiry Date": "-",
//     "Unit Price": 25850,
//     "Total Price": 25850
//   },
//   {
//     "SL No": 10,
//     "Category": "Pen Tablets",
//     "Lab Name": "-",
//     "Department": "Pen Tablets",
//     "Sys Config": "-",
//     "Quantity": 4,
//     "Invoice No": "HO-OUT-80 & 31/01/2022",
//     "Purchase Date": "-",
//     "Expiry Date": "-",
//     "Unit Price": 5841,
//     "Total Price": 23364
//   },
//   {
//     "SL No": 11,
//     "Category": "AC unit",
//     "Lab Name": "-",
//     "Department": "AC unit",
//     "Sys Config": "-",
//     "Quantity": 1,
//     "Invoice No": "VJA2122-250 & 28/07/2021",
//     "Purchase Date": "-",
//     "Expiry Date": "-",
//     "Unit Price": 36700,
//     "Total Price": 36700
//   },
//   {
//     "SL No": 12,
//     "Category": "Mic",
//     "Lab Name": "-",
//     "Department": "Mic",
//     "Sys Config": "-",
//     "Quantity": 1,
//     "Invoice No": "STV/19-20/11371",
//     "Purchase Date": "-",
//     "Expiry Date": "-",
//     "Unit Price": 3644,
//     "Total Price": 4300
//   },
//   {
//     "SL No": 13,
//     "Category": "Projectors",
//     "Lab Name": "-",
//     "Department": "Projectors",
//     "Sys Config": "-",
//     "Quantity": 6,
//     "Invoice No": "CORPOUT",
//     "Purchase Date": "-",
//     "Expiry Date": "-",
//     "Unit Price": "-",
//     "Total Price":"-"}]



const MonthlyReport = () => {
  const [formData, setFormData] = useState({
    departmentName: '',
    labName: ''
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
      <Navbar/>
      <img
              src="https://res.cloudinary.com/dlovqnrza/image/upload/v1710952325/BEC_bmbdkx.jpg"
              alt="BEC"
              className="college-logo"
            />
    <div className="task-container-add">
      <form className="add-dept" onSubmit={handleSubmit}>
        <div className="create-task-form-input">
          <div className="create-task-form-input">
          <label htmlFor="labName">Month Name:</label>
          <select className='task-input-field'>
          <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
        </select>

        </div>

        </div>
      
        <button type="submit" className="add-dept-btn">Search</button>
      </form>
      
    </div>
    </>
  );
};

export default MonthlyReport;
