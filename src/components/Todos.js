import Todo from './Todo';
function Todos({ todoList, deleteTodo, editTodo }) {
	return (
		<>
			<h3>Todo:</h3>
			{todoList.map((todo, index) => {
				return (<Todo key={index} todoValue={todo} index={index} deleteTodo={deleteTodo} editTodo={editTodo} />)
			})}
		</>);
}

export default Todos;
