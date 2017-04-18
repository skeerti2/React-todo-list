import React from 'react';

export default class CreateTodo extends React.Component{
  render() {
    return (
          <form onSubmit={this.handleCreate.bind(this)}>
          <input type="text" placeholder="Create a Task" ref="createInput"/>
          <button>Submit</button>
          </form>
    );
  }
  handleCreate(e) {
    e.preventDefault()
    console.log(this.refs.createInput.value)
    this.props.createTask(this.refs.createInput.value)
    this.refs.createInput.value=''
  }
}
