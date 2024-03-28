import { Route, Routes } from 'react-router-dom';
import './index.css';
import AdminHome from './components/Adminhome';
import AddInventory from './components/AddInventory';
import Inventory from './components/Inventory';
import AddDeptForm from './components/AddDept'
import ManageDeptForm from './components/ManageDept';
import IssueItem from './components/IssueItem';
import TransactionsHistory from './components/TransactionsHistory';
import MonthlyReports from './components/MonthlyReport';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AnuallyReports from './components/AnuallyReports';



const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/inventory-add" element={<AddInventory />} />
    <Route path="/manage-inventory" element={<Inventory />} />
    <Route path="/add-dept" element={<AddDeptForm />} />
    <Route path="/manage-dept" element={<ManageDeptForm />} />
    <Route path="/issue-item" element={<IssueItem />} />
    <Route path="/transaction-history" element={<TransactionsHistory />} />
    <Route path="/monthly-reports" element={<MonthlyReports />} />
    <Route path="/anually-reports" element={<AnuallyReports />} />



   
  </Routes>
);

export default App;
