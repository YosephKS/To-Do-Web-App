import React from 'react';
import NavigationBar from './components/NavigationBar';
import SubNavigationBar from './components/SubNavigationBar';


class NotFound extends React.Component {
  render() {
    return (
      <div>
          <NavigationBar />

          <SubNavigationBar />

          <h1 style = {{display: "flex", justifyContent: "center", textAlign: "center", marginTop: "50px"}}>
            Sorry, the page that you are searching is not found!
          </h1>
      </div>
);}}

export default NotFound;