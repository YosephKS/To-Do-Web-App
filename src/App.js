import React from 'react';
import NavigationBar from './components/NavigationBar';
import AddTaskForm from './components/AddTaskForm';
import SubNavigationBar from './components/SubNavigationBar';


class App extends React.Component {
  render() {
    const {params} = this.props.match
    return (
      <div>
          
          <NavigationBar />

          <SubNavigationBar />

          <h1>{params.username}'s To-Do List</h1>

          <AddTaskForm />

      </div>
);}}

export default App;
