import React from 'react';

export default class CreateTodo extends React.Component{
  render() {
    return (
          <form>
          <input type="text" placeholder="Create a Task" />
          <button>Submit</button>
          </form>
    );
  }
}
