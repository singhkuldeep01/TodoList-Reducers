import React, { useContext } from 'react';
import TodoContext from '../../Context/TodoContext';
import Todo from './Todo';

function TodoList() {
  const { state } = useContext(TodoContext);
  const { todos, filter } = state;

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.isCompleted;
    if (filter === 'completed') return todo.isCompleted;
    return true; // For 'All'
  });

  return (
    <div>
      {filteredTodos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;