import { Route, Routes } from 'react-router-dom';
import './index.css';
import AdminHome from './components/Adminhome';
import AddInventory from './components/AddInventory';
import Inventory from './components/ManageInventory';
import AddDeptForm from './components/AddDept'
import ManageDeptForm from './components/ManageDept';
import IssueItem from './components/IssueItem';
import TransactionsHistory from './components/TransactionsHistory';
import MonthlyReports from './components/MonthlyReport';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AnuallyReports from './components/AnuallyReports';
import UserHomePage from './components/UserHomePage';
import UserInventory from './components/UserInventory';
import UserDept from './components/UserDept';
import UserTransactions from './components/UserTransactions';
import UserAnuallyReports from './components/UserAnuallyReports'



const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/add-items" element={<AddInventory />} />
    <Route path="/manage-inventory" element={<Inventory />} />
    <Route path="/add-dept" element={<AddDeptForm />} />
    <Route path="/manage-dept" element={<ManageDeptForm />} />
    <Route path="/issue-item" element={<IssueItem />} />
    <Route path="/transaction-history" element={<TransactionsHistory />} />
    <Route path="/monthly-reports" element={<MonthlyReports />} />
    <Route path="/anually-reports" element={<AnuallyReports />} />
    <Route path="/admin" element={<AdminHome/>}/>
    {/* //User Routes  */}
    <Route path="/user-home" element={<UserHomePage/>} />
    <Route path="/user-inventory" element={<UserInventory/>} />
    <Route path="/user-dept" element={<UserDept/>} />
    <Route path="/user-transactions" element={<UserTransactions/>} />
    <Route path="/user-reports" element={<UserAnuallyReports/>} />




  </Routes>
);

export default App;
