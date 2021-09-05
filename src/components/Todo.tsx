import React, { useState, FunctionComponent } from 'react';
import { TodoType } from '../types';
import { isOnlySpaces } from '../utils';

export const Todo:FunctionComponent<TodoProps> = ({ todo, deleteTodo, editTodo, setTodoComplete, index }) => {
	const defaultState = {
		editting: false,
		editValue: undefined
	};
	const [state, setState] = useState<State>(defaultState);

	function onClickEdit() {
		setState({ ...state, editting: true, editValue: todo.todo });
	}
	function onClickDelete() {
		deleteTodo(index);
	}
	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		setState({ ...state, editValue: e.target.value })
	}
	function onSave() {
		editTodo(index, state.editValue as string);
		setState(defaultState);
	}

	function onClickCancel() {
		setState({ ...state, editting: false });
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.code === 'Enter') {
			onSave();
		}
	}

	function onCheckboxClicked() {
		setTodoComplete(index, !todo.complete)
	}

	function getStaticView() {
		return (
			<>
				<p >{todo.todo}</p>
				<input type="checkbox" id="todo-checkbox" checked={todo.complete} onChange={onCheckboxClicked} />
				<button type='submit' onClick={onClickEdit}>Edit</button>
				<button type='submit' onClick={onClickDelete}>Delete</button>
			</>
		);
	}

	function isSaveDisabled() {
		return isOnlySpaces(state.editValue);
	}

	function getEditView() {
		return (
			<>
				<input type="text" id="todo-edit-input" onChange={onChange} onKeyDown={handleKeyDown} value={state.editValue}></input>
				<button type='submit' onClick={onSave} disabled={isSaveDisabled()}>Save</button>
				<button type='submit' onClick={onClickCancel}>Cancel</button>
			</>
		);
	}

	return (
		<>
			{state.editting ? getEditView() : getStaticView()}
		</>);
}

type TodoProps = {
	todo: TodoType,
	deleteTodo: (index: number)=> void,
	editTodo: (index: number, value: string) => void,
	setTodoComplete: (index: number, isComplete: boolean) => void,
	index: number
}

type State = {
	editting: boolean,
	editValue: undefined | string
}
