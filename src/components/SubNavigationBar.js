import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class SubNavigationBar extends React.Component {
    render() {
    return (
        <Navbar bg="dark" sticky = "top" style = {{height: "45px"}}>
            <Nav className="mr-auto">
                <Nav.Link href="#home" style = {{color: "white", marginRight: "15px"}}>Home</Nav.Link>
                <Nav.Link href="#features" style = {{color: "white", borderBottom: "5px solid white"}}><b>Dashboard</b></Nav.Link>
            </Nav>
        </Navbar>
)}}

export default SubNavigationBar;