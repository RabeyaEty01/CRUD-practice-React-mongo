import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-nav">
            <NavLink to="/home">
                <h3>Home</h3>
            </NavLink>
            <NavLink to="/addProduct">
                <h3>Add Product</h3>
            </NavLink>
            <NavLink to="/products">
                <h3>Products</h3>
            </NavLink>
            <NavLink to="/adminDashboard">
                <h3>Admin Dashboard</h3>
            </NavLink>
            <NavLink to="/update">
                <h3>Update</h3>
            </NavLink>
        </div>
    );
};

export default Header;