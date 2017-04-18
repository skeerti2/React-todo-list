import React from 'react';
import TodosList from './todos-list'
import CreateTodo from './create-todo'

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
  constructor(props){
    super(props);
    this.state = {
      todos
    }
  }
  render() {
    return (
      <div>
      <h1>React ToDoS App</h1>
      <CreateTodo />
      < TodosList todos = {this.state.todos}/>
      </div>
    );
  }
}
