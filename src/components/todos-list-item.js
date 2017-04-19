import React from 'react';

export default class TodosListItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderColored(){
    const {task, isCompleted} = this.props
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    }
    console.log(this.props)
    if(this.state.isEditing){
      return(
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput"/>
          </form>
        </td>
      )
    }
    return(
      <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>{this.props.task}</td>
    )
  }

  renderEditSection(){
    if(this.state.isEditing){
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }

    return(
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
      </td>
    );
  }

  render() {
    return (
          <tr>
            {this.renderColored()}
            {this.renderEditSection()}
          </tr>
    );
  }

  onEditClick(){
    this.setState({ isEditing: true });
  }
  onCancelClick(){
    this.setState({ isEditing: false});
  }
  onSaveClick(e) {
    e.preventDefault()
    const oldTask = this.props.task; //oldTask and newTask to be initialized
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask)
    this.setState({isEditing: false});
  }
}
