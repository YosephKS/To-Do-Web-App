import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../static/images/calendar.svg';
import '../static/css/NavigationBar.css';

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="warning" variant="dark" style = {{height: this.props.height}}>
        <Navbar.Brand href="#home">
        <img id = "logo-image"
            alt=""
            src={logo}
            style = {{marginRight: "10px"}}
            width="30"
            height="30"
            className="d-inline-block align-top"
        />
        <b style = {{fontSize: "23px"}}>{'TO-DO WEB APP'}</b>
        </Navbar.Brand>
    </Navbar>
)}}

export default NavigationBar;