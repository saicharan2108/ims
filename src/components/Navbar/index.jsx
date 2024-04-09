import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Cookies from 'js-cookie';

import {
  NavContainer,
  SubNavContainer,
  UserName,
  RightIcon,
  UserProfileCard,
  DownIcon,
  UserImage,
  LogoutText,
  LinkItem,
  LogoutIcon,
  SubNavItem,
  DepartmentsIcon,
  InventoryIcon,
  ReportIcon,
  HomeIcon,
  NavItem,
  UpdateIcon
} from './DashBoardStyledComponents';

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('home');
  const [activeSubNavItem, setActiveSubNavItem] = useState(null);
  const [isInventoryActive, setInventoryActive] = useState(false);
  const [isDepartmentsActive, setDepartmentsActive] = useState(false);
  const [isTransactionsActive, setTransactionsActive] = useState(false);
  const [isReportsActive, setReportsActive] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch username from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.username);
    }
  }, []);

  const clickedHome = () => {
    setActiveNavItem('home');
    setActiveSubNavItem(null);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const clickedNavItem = (navItem) => {
    setActiveNavItem(navItem);
    // Toggle sub-nav items
    switch (navItem) {
      case 'inventory':
        setInventoryActive(!isInventoryActive);
        setDepartmentsActive(false);
        setTransactionsActive(false);
        setReportsActive(false);
        break;
      case 'departments':
        setDepartmentsActive(!isDepartmentsActive);
        setInventoryActive(false);
        setTransactionsActive(false);
        setReportsActive(false);
        break;
      case 'transactions':
        setTransactionsActive(!isTransactionsActive);
        setInventoryActive(false);
        setDepartmentsActive(false);
        setReportsActive(false);
        break;
      case 'reports':
        setReportsActive(!isReportsActive);
        setInventoryActive(false);
        setDepartmentsActive(false);
        setTransactionsActive(false);
        break;
      default:
        setInventoryActive(false);
        setDepartmentsActive(false);
        setTransactionsActive(false);
        setReportsActive(false);
        break;
    }
    setActiveSubNavItem(null);
  };

  return (
    <>
      <NavContainer>
        <UserProfileCard>
          <UserImage src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png" alt="User Profile" />
          <div>
            <UserName>{userName}</UserName>
            <div>
              <LogoutText onClick={handleLogout}>
                Logout <LogoutIcon />
              </LogoutText>
            </div>
          </div>
        </UserProfileCard>
        <LinkItem to="/admin">
          <NavItem isActive={activeNavItem === 'home'} onClick={() => clickedNavItem('home')}>
            <HomeIcon /> Home
          </NavItem>
        </LinkItem>
        <NavItem
          isActive={activeNavItem === 'inventory'}
          onClick={() => clickedNavItem('inventory')}
        >
          <InventoryIcon /> Inventory {isInventoryActive ? <DownIcon /> : <RightIcon />}
        </NavItem>
        {isInventoryActive && (
          <SubNavContainer>
            <LinkItem to="/add-items">
              <SubNavItem
                isActive={activeSubNavItem === 'add_items'}
                onClick={() => setActiveSubNavItem('add_items')}
              >
                Add Items
              </SubNavItem>
            </LinkItem>
            <LinkItem to="/manage-inventory">
              <SubNavItem
                isActive={activeSubNavItem === 'manage_inventory'}
                onClick={() => setActiveSubNavItem('manage_inventory')}
              >
                Manage
              </SubNavItem>
            </LinkItem>
          </SubNavContainer>
        )}
        <NavItem
          isActive={activeNavItem === 'departments'}
          onClick={() => clickedNavItem('departments')}
        >
          <DepartmentsIcon /> Departments {isDepartmentsActive ? <DownIcon /> : <RightIcon />}
        </NavItem>
        {isDepartmentsActive && (
          <SubNavContainer>
            <LinkItem to="/add-dept">
              <SubNavItem
                isActive={activeSubNavItem === 'add_dept'}
                onClick={() => setActiveSubNavItem('add_dept')}
              >
                Add Dept
              </SubNavItem>
            </LinkItem>
            <LinkItem to="/manage-dept">
              <SubNavItem
                isActive={activeSubNavItem === 'manage_dept'}
                onClick={() => setActiveSubNavItem('manage_dept')}
              >
                Manage Dept
              </SubNavItem>
            </LinkItem>
          </SubNavContainer>
        )}
        <NavItem isActive={activeNavItem === 'transactions'} onClick={() => clickedNavItem('transactions')}>
          <UpdateIcon /> Transactions {isTransactionsActive ? <DownIcon /> : <RightIcon />}
        </NavItem>
        {isTransactionsActive && (
          <SubNavContainer>
            <LinkItem to="/issue-item">
              <SubNavItem
                isActive={activeSubNavItem === 'issue_item'}
                onClick={() => setActiveSubNavItem('issue_item')}
              >
                Issue Item
              </SubNavItem>
            </LinkItem>
            <LinkItem to="/transaction-history">
              <SubNavItem
                isActive={activeSubNavItem === 'transaction_history'}
                onClick={() => setActiveSubNavItem('transaction_history')}
              >
                Transaction History
              </SubNavItem>
            </LinkItem>
          </SubNavContainer>
        )}
        <NavItem isActive={activeNavItem === 'reports'} onClick={() => clickedNavItem('reports')}>
          <ReportIcon /> Reports {isReportsActive ? <DownIcon /> : <RightIcon />}
        </NavItem>
        {isReportsActive && (
          <SubNavContainer>
            <LinkItem to="/anually-reports">
              <SubNavItem
                isActive={activeSubNavItem === 'annually'}
                onClick={() => setActiveSubNavItem('annually')}
              >
                Anually
              </SubNavItem>
            </LinkItem>
            <LinkItem to="/monthly-reports">
              <SubNavItem
                isActive={activeSubNavItem === 'monthly'}
                onClick={() => setActiveSubNavItem('monthly')}
              >
                Monthly
              </SubNavItem>
            </LinkItem>
          </SubNavContainer>
        )}
      </NavContainer>
    </>
  );
};

export default Navbar;
