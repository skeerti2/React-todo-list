import React from 'react';
import TodosListHeader from './todo-list-header'

export default class TodosList extends React.Component{
  render() {
    return (
      <table>
        <TodosListHeader/>
      </table>
    );
  }
}
