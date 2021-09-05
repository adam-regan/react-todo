
import React, { useState, FunctionComponent } from 'react';
import { TodoType } from '../types';
import { isOnlySpaces } from '../utils';
export const CreateTodo: FunctionComponent<CreateTodoProps> = ({ onAddTodo }) => {
	const [input, setInput] = useState('');
	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		setInput(e.target.value);
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.code === 'Enter' && !isSubmitDisabled()) {
			onSubmit();
		}
	}

	function onSubmit() {
		onAddTodo({
			todo: input,
			complete: false
		});
		setInput('');
	}

	function isSubmitDisabled() {
		return isOnlySpaces(input);
	}

	return (
		<>
			<input type="text" id="todo-input" onChange={onChange} onKeyDown={handleKeyDown} value={input}></input>
			<button type='submit' onClick={onSubmit} disabled={isSubmitDisabled()}>+</button>
		</>);
}

type CreateTodoProps = {
	onAddTodo: (todo: TodoType) => void
}