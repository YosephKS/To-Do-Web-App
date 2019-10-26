import React from 'react';
import NavigationBar from './components/NavigationBar';
import SubNavigationBar from './components/SubNavigationBar';
import Maps from './components/Maps';
import Forms from './components/Forms';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import HomeContent from'./components/HomeContent';


class Home extends React.Component {
  render() {
    return (
      <div>

          <NavigationBar />

          <SubNavigationBar />

          <HomeContent />

          <Container fluid = {true} className = "section-contact">
            <Row className = "justify-content-md-center">
              <Col className = "col-contact">
                <h1 className = "title-contact">
                  CONTACT
                </h1>
              </Col>
            </Row>
            <Row>
              <Col className = "google-map" lg = {5} md = {11} sm = {10} xs = {10}>
                <Maps />
              </Col>
              <Col className = "form" lg = {6} md = {12}>
                <Forms/>
              </Col>
            </Row>
          </Container>

      </div>
);}}

export default Home;