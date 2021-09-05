import { useState } from 'react';
import { isOnlySpaces } from '../utils';
export function CreateTodo({ onAddTodo }) {
	const [input, setInput] = useState('');
	function onChange(e) {
		setInput(e.target.value);
	}

	function handleKeyDown(e) {
		if (e.keyCode === 13 && !isSubmitDisabled()) {
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

