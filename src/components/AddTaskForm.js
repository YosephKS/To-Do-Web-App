import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import addButton from '../static/images/plus.svg';

class AddTaskForm extends React.Component {
  render() {
    return (
<Container fluid = {true} style = {{paddingLeft: "5%", paddingRight: " 5%"}}>
    <Row>
        <Col>
  <Container style = {{padding: 0, marginTop: "100px", marginBottom: "100px", backgroundColor: "#FAFAFA", borderRadius: "10px"}}>
    <Row style = {{padding: 0, marginLeft: "0%", marginRight: "0%"}} className = "justify-content-md-center">
      <Col md = {11} sm = {10} xs = {9} style = {{display: "flex", justifyContent: "center", textAlign: "center", paddingTop: "15px", paddingBottom: "15px"}}>
        <Form.Control placeholder="Add Task"/>
      </Col>
      <Col md = {1} sm = {2} xs = {3} style = {{display: "flex", justifyContent: "center", textAlign: "center", paddingTop: "15px", paddingBottom: "15px"}}>
        <img src = {addButton} width = "35px" height = "35px" alt = "Add Button"/>
      </Col>
    </Row>
  </Container>
  </Col>
  </Row>
  </Container>
);}}

export default AddTaskForm;