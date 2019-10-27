import React from 'react';
import NavigationBar from './components/NavigationBar';
import AddTaskForm from './components/AddTaskForm';
import SubNavigationBar from './components/SubNavigationBar';
import './static/css/App.css';


class App extends React.Component {
  render() {
    const {params} = this.props.match
    return (
      <div>
          
          <NavigationBar />

          <SubNavigationBar dashboardPage = "active"/>

          <h1 className = "user-title">{params.username}'s To-Do List</h1>

          <AddTaskForm />

      </div>
);}}

export default App;
