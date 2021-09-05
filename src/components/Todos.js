import { Todo } from './Todo';

export function Todos({ todoList, deleteTodo, editTodo, setTodoComplete }) {
	return (
		<>
			<h3>Todo:</h3>
			{todoList.map((todo, index) => {
				return (<Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} editTodo={editTodo} setTodoComplete={setTodoComplete} />)
			})}
		</>);
}

