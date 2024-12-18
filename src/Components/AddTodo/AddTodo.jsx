import React, { useState, useContext } from 'react';
import TodoContext from '../../Context/TodoContext';

function AddTodo() {
  const { dispatch } = useContext(TodoContext);
  const [todoInput, setTodoInput] = useState('');
  const [priority, setPriority] = useState('low');

  function submitHandler(e) {
    e.preventDefault();
    const value = todoInput.trim();
    if (value === '') return;
    dispatch({ type: 'add_todo', payload:{text: value, priority: priority} });
    setTodoInput('');
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        placeholder='Add Todo'
        value={todoInput || ''}
        onChange={(e) => {
          setTodoInput(e.target.value);
        }}
      />
       <select
        value={priority}
        onChange={(e) => {
          setPriority(e.target.value);
        }}
      >
        <option value='low'>Low</option>
        <option value='medium'>Medium</option>
        <option value='high'>High</option>
      </select>
      <button type='submit'>Add</button>
    </form>
  );
}

export default AddTodo;