import React from 'react';
import TodosList from './todos-list'

const todos = [
  {
    task: 'complete React tutorial',
    isCompleted: false
  },
  {
    task: 'finish applying to Grab',
    isCompleted: false
  }
];
export default class App extends React.Component{
  render() {
    return (
      <div>
      <h1>React ToDoS App</h1>
      < TodosList />
      </div>
    );
  }
}
