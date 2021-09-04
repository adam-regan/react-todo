import { useState } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

function App() {
  const [todoList, setTodoList] = useState([]);
  function addTodo(todo) {
    console.log(todo)
    setTodoList(todoList.concat(todo));
  }
  function deleteTodo(index) {
    const todoListCopy = [...todoList];
    todoListCopy.splice(index, 1);
    setTodoList(todoListCopy)
  }

  function editTodo(index, value) {
    const todoListCopy = [...todoList];
    todoListCopy[index] = value;
    setTodoList(todoListCopy)
  }
  return (
    <>
      <CreateTodo onAddTodo={addTodo} />
      <Todos todoList={todoList} deleteTodo={deleteTodo} editTodo={editTodo} />
    </>
  );
}

export default App;
