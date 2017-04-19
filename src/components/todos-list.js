import _ from 'lodash'
import React from 'react';
import TodosListHeader from './todo-list-header'
import TodosListItem from './todos-list-item'

export default class TodosList extends React.Component{
  renderItems() {
    const props = _.omit(this.props, 'todos') //from props omit the todos array, pass rest of the props to ListItem
    return _.map (this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props}/> );
  }
  render() {
    return (
      <table>
        <TodosListHeader/>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
