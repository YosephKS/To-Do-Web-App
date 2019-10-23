import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../static/css/SubNavigationBar.css';

class SubNavigationBar extends React.Component {
    render() {
    return (
        <Navbar bg="dark" sticky = "top" className = "subnavbar-body">
            <Nav className="mr-auto">
                <Nav.Link href="#home" className = "subnav-home" style = {{color: "white"}}>Home</Nav.Link>
                <Nav.Link href="#dashboard" className = "subnav-dashboard" style = {{color: "white"}}><b>Dashboard</b></Nav.Link>
            </Nav>
        </Navbar>
)}}

export default SubNavigationBar;