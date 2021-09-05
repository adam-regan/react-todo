import { useState } from 'react';
import { CreateTodo, Todos, Filters } from './components';
import { FILTER_TYPES } from './types/filter.types';
function App() {
  const [state, setState] = useState({
    todoList: [],
    filteredList: [],
    filter: FILTER_TYPES.ALL
  });

  function setFilteredList(type) {
    setState({
      ...state,
      filteredList: getFilteredList(state.todoList, type),
      filter: type
    });
  }

  function getFilteredList(list = state.todoList, newFilter) {
    console.log(newFilter);
    const filter = newFilter || state.filter;
    switch (filter) {
      case FILTER_TYPES.ALL:
        return list;
      case FILTER_TYPES.ACTIVE:
        return list.filter((todo) => !todo.complete);
      case FILTER_TYPES.COMPLETE:
        return list.filter((todo) => todo.complete);
      default:
        throw new Error('Not using a genuine filter!');
    }
  }

  function addTodo(todo) {
    const newList = state.todoList.concat(todo);
    setState({
      ...state,
      todoList: newList,
      filteredList: getFilteredList(newList)
    });
  }
  function deleteTodo(index) {
    const todoListCopy = [...state.todoList];
    todoListCopy.splice(index, 1);
    setState({
      ...state,
      todoList: todoListCopy,
      filteredList: getFilteredList(todoListCopy)
    })
  }

  function editTodo(index, value) {
    const todoListCopy = [...state.todoList];
    todoListCopy[index].todo = value;
    setState({
      ...state,
      todoList: todoListCopy
    })
  }

  function setTodoComplete(index, isComplete) {
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

export default App;
