import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import AddTaskForm from './components/AddTaskForm';
import SubNavigationBar from './components/SubNavigationBar';
class App extends React.Component {
  render() {
    return (
      <div>

          <NavigationBar height = "85px" />

          <SubNavigationBar />

          <AddTaskForm />

      </div>
);}}

export default App;
