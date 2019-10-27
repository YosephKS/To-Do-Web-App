import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../static/css/Header.css';

class Header extends React.Component {

  render() {
    return (
      <div>
          <Container fluid = {true}>
              <Row>
                <Col className = "header-title-col">
                  <p className = "header-title">
                    <strong>TO-DO</strong>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className = "header-subtitle-col">
                  <h4>
                    Plan Faster, Plan Better
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col className = "header-button-col">
                    <Button variant="outline-warning" className = "dashboard-button" href = "/dashboard/User">Try Version 0.9.0 Beta</Button>
                </Col>
              </Row>
          </Container>
      </div>
);}}

export default Header;