import React, {FunctionComponent} from 'react';
import { TodoType } from '../types';
import { Todo } from './Todo';

export const Todos: FunctionComponent<TodosProps> = ({ todoList, deleteTodo, editTodo, setTodoComplete }) => {
	return (
		<>
			<h3>Todo:</h3>
			{todoList.map((todo, index) => {
				return (<Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} editTodo={editTodo} setTodoComplete={setTodoComplete} />)
			})}
		</>);
}

type TodosProps = {
	todoList: TodoType[],
	deleteTodo: (index: number)=> void,
	editTodo: (index: number, value: string) => void,
	setTodoComplete: (index: number, isComplete: boolean) => void,
}