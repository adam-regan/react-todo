import { useState } from 'react';
import { isOnlySpaces } from '../utils';

export function Todo({ todo, deleteTodo, editTodo, setTodoComplete, index }) {
	const defaultState = {
		editting: false,
		editValue: null
	};
	const [state, setState] = useState(defaultState);

	function onClickEdit() {
		setState({ ...state, editting: true, editValue: todo.todo });
	}
	function onClickDelete() {
		deleteTodo(index);
	}
	function onChange(e) {
		setState({ ...state, editValue: e.target.value })
	}
	function onSave() {
		editTodo(index, state.editValue);
		setState(defaultState);
	}

	function onClickCancel() {
		setState({ ...state, editting: false });
	}

	function handleKeyDown(e) {
		if (e.keyCode === 13) {
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
