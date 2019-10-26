import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../static/css/HomeContent.css';


class HomeContent extends React.Component {
  render() {
    return (
      <div>
          <Container fluid = {true}>
              <Row>
                  <Col style = {{height: "600px"}}>
                    Another Hello World
                  </Col>
              </Row>
          </Container>
          <Container fluid = {true} style = {{backgroundColor: "#292b2c"}}>
              <Row>
                  <Col className = "home-content-col">
                  </Col>
              </Row>
              <Row>
                  <Col style = {{height: "600px", color: "white"}}>
                    Another Hello World
                  </Col>
              </Row>
          </Container>
          <Container fluid = {true}>
              <Row>
                  <Col className = "home-content-col">
                  </Col>
              </Row>
          </Container>
      </div>
);}}

export default HomeContent;