import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Cookies from 'js-cookie';
import {
  NavContainer,
  UserName,
  RightIcon,
  UserProfileCard,
  UserImage,
  LogoutText,
  LinkItem,
  LogoutIcon,
  DepartmentsIcon,
  InventoryIcon,
  ReportIcon,
  HomeIcon,
  NavItem,
  UpdateIcon
} from './DashBoardStyledComponents';

const UserNavbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('home');
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      if (userData && userData.username) {
        setUserName(userData.username);
      }
    }
  }, []);
  console.log(userName)

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const clickedNavItem = (navItem) => {
    setActiveNavItem(navItem);
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
        <LinkItem to="/user-home">
          <NavItem isActive={activeNavItem === 'home'} onClick={() => clickedNavItem('home')}>
            <HomeIcon /> Home
          </NavItem>
        </LinkItem>
        <LinkItem to="/user-inventory">
          <NavItem
            isActive={activeNavItem === 'inventory'}
            onClick={() => clickedNavItem('inventory')}
          >
            <InventoryIcon /> Inventory
          </NavItem>
        </LinkItem>
        <LinkItem to="/user-dept">
          <NavItem
            isActive={activeNavItem === 'departments'}
            onClick={() => clickedNavItem('departments')}
          >
            <DepartmentsIcon /> Departments
          </NavItem>
        </LinkItem>
        <LinkItem to="/user-transactions">
          <NavItem isActive={activeNavItem === 'transactions'} onClick={() => clickedNavItem('transactions')}>
            <UpdateIcon /> Transactions
          </NavItem>
        </LinkItem>
        <LinkItem to="/user-reports">
          <NavItem isActive={activeNavItem === 'reports'} onClick={() => clickedNavItem('reports')}>
            <ReportIcon /> Reports
          </NavItem>
        </LinkItem>
      </NavContainer>
    </>
  );
};

export default UserNavbar;
