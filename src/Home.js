import React from 'react';
import NavigationBar from './components/NavigationBar';
import SubNavigationBar from './components/SubNavigationBar';
import './Home.css';
import HomeContent from'./components/HomeContent';
import Header from './components/Header';
import Contact from './components/Contact';


class Home extends React.Component {

  render() {
    return (
      <div>

          <NavigationBar />

          <SubNavigationBar />

          <Header />

          <HomeContent/>

          <Contact />

      </div>
);}}

export default Home;