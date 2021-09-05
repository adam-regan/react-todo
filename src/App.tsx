import React from 'react';
import { useState } from 'react';
import { CreateTodo, Todos, Filters, FILTER_TYPES } from './components';
import { TodoType } from './types';

export const App = () => {
  const [state, setState] = useState<State>({
    todoList: [],
    filteredList: [],
    filter: FILTER_TYPES.ALL
  });

  function setFilteredList(type: symbol) {
    setState({
      ...state,
      filteredList: getFilteredList(state.todoList, type),
      filter: type
    });
  }

  function getFilteredList(list = state.todoList, newFilter?: symbol) {
    console.log(newFilter);
    const filter = newFilter || state.filter;
    switch (filter) {
      case FILTER_TYPES.ALL:
        return list;
      case FILTER_TYPES.ACTIVE:
        return list.filter((todo: TodoType) => !todo.complete);
      case FILTER_TYPES.COMPLETE:
        return list.filter((todo: TodoType) => todo.complete);
      default:
        throw new Error('Not using a genuine filter!');
    }
  }

  function addTodo(todo: TodoType) {
    const newList = state.todoList.concat([todo]);
    setState({
      ...state,
      todoList: newList,
      filteredList: getFilteredList(newList)
    });
  }
  function deleteTodo(index: number) {
    const todoListCopy = [...state.todoList];
    todoListCopy.splice(index, 1);
    setState({
      ...state,
      todoList: todoListCopy,
      filteredList: getFilteredList(todoListCopy)
    })
  }

  function editTodo(index: number, value: string) {
    const todoListCopy = [...state.todoList];
    todoListCopy[index].todo = value;
    setState({
      ...state,
      todoList: todoListCopy
    })
  }

  function setTodoComplete(index: number, isComplete: boolean) {
    console.log(getFilteredList())
    const todoListCopy = [...state.todoList];
    todoListCopy[index].complete = isComplete;
    setState({
      ...state,
      todoList: todoListCopy,
      filteredList: getFilteredList(todoListCopy)
    })
  }


  return (
    <>
      <CreateTodo onAddTodo={addTodo} />
      <Filters onFilterSelected={setFilteredList} currentFilter={state.filter} />
      <Todos todoList={state.filteredList} deleteTodo={deleteTodo} editTodo={editTodo} setTodoComplete={setTodoComplete} />
    </>
  );
}

type State = {
  todoList: Array<TodoType>,
  filteredList: Array<TodoType>,
  filter: symbol
}
