import { useState } from 'react';

function Todo({ todoValue, deleteTodo, editTodo, index }) {
	const defaultState = {
		editting: false,
		editValue: null
	};
	const [state, setState] = useState(defaultState);

	function onClickEdit() {
		setState({ ...state, editting: true, editValue: todoValue });
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

	function getStaticView() {
		return (
			<>
				<p >{todoValue}</p>
				<button type='submit' onClick={onClickEdit}>Edit</button>
				<button type='submit' onClick={onClickDelete}>Delete</button>
			</>
		);
	}
	function getEditView() {
		return (
			<>
				<input type="text" id="todo-edit-input" onChange={onChange} onKeyDown={handleKeyDown} value={state.editValue}></input>
				<button type='submit' onClick={onSave}>Save</button>
				<button type='submit' onClick={onClickCancel}>Cancel</button>
			</>
		);
	}

	return (
		<>
			{state.editting ? getEditView() : getStaticView()}
		</>);
}

export default Todo;
