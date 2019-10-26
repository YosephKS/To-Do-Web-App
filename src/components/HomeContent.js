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
              <Row>
                  <Col className = "home-content-col">
                  </Col>
              </Row>
          </Container>
      </div>
);}}

export default HomeContent;