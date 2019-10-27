import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../static/css/SubNavigationBar.css';
import {NavLink} from 'react-router-dom';

class SubNavigationBar extends React.Component {
    render() {
    return (
        <Navbar bg="dark" sticky = "top" className = "subnavbar-body">
            <Nav className="mr-auto">
                <NavLink exact activeClassName="active" to="/" className = "subnav-home" style = {{color: "white"}}>
                    Home
                </NavLink>
                <NavLink exact activeClassName="active" to="/dashboard/User" className = "subnav-dashboard" style = {{color: "white"}}>
                    Dashboard
                </NavLink>
            </Nav>
        </Navbar>
)}}

export default SubNavigationBar;