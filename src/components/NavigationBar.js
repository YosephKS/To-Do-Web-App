import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../static/images/calendar.svg';
import '../static/css/NavigationBar.css';

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar variant="dark" className = "navbar-body">
        <Navbar.Brand href="#home">
        <img id = "logo-image"
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
        />
        <b className = "app-title">{'TO-DO'}</b>
        </Navbar.Brand>
    </Navbar>
)}}

export default NavigationBar;