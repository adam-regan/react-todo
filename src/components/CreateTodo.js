import { useState } from 'react';
function CreateTodo({ onAddTodo }) {
	const [input, setInput] = useState('');
	function onChange(e) {
		setInput(e.target.value);
	}

	function handleKeyDown(e) {
		if (e.keyCode === 13) {
			onSubmit();
		}
	}

	function onSubmit() {
		onAddTodo(input);
		setInput('');
	}

	return (
		<>
			<input type="text" id="todo-input" onChange={onChange} onKeyDown={handleKeyDown} value={input}></input>
			<button type='submit' onClick={onSubmit} disabled={input === ''}>+</button>
		</>);
}

export default CreateTodo;
