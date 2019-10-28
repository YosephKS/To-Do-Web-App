import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../static/css/HomeContent.css';
import img1 from '../static/images/daily.svg';
import img2 from '../static/images/edit.svg';
import img3 from '../static/images/add-friend.svg';

class HomeContent extends React.Component {
  render() {
    return (
      <div>
          <Container fluid = {true} style = {{backgroundColor: "#292b2c"}}>
              <Row>
                  <Col className = "home-content-col">
                  </Col>
              </Row>
              <Row>
                  <Col className = "home-content-title-col">
                    <h1>FEATURES</h1>
                  </Col>
              </Row>
              <Row style = {{paddingTop: "0px", paddingBottom: "200px"}}>
                  <Col className = "home-content-body-col" md = {4} sm = {12}>
                    <Container>
                      <Row>
                        <Col className = "home-content-body-col-inner">
                          <img src ={img1} width = "200px" height = "200px" alt = "img1" className = "img1" />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h2>Manage Daily</h2>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        Keep Track of Daily Tasks
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                  <Col md = {4} sm = {12} className = "home-content-body-col">
                  <Container>
                      <Row>
                        <Col className = "home-content-body-col-inner">
                          <img src ={img2} width = "200px" height = "200px" alt = "img2" className = "img2" />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h2>Flexible Editing</h2>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        Modify Tasks Based on Personal Needs
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                  <Col md ={4} sm = {12} className = "home-content-body-col">
                  <Container>
                      <Row>
                        <Col className = "home-content-body-col-inner">
                          <img src ={img3} width = "200px" height = "200px" alt = "img3" className = "img3" />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h2>User Friendly</h2>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        Simple Interface With Beautiful Design
                        </Col>
                      </Row>
                    </Container>
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