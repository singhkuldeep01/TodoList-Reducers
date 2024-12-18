import React, { useContext, useState } from 'react';
import TodoContext from '../../Context/TodoContext';
import Editform from './Editform';

function Todo({ todo }) {
  const { dispatch } = useContext(TodoContext);
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [priority, setPriority] = useState('low');

  const deleteTodo = () => {
    dispatch({ type: 'delete_todo', payload: todo.id });
  };

  const toggleTodo = () => {
    dispatch({ type: 'toggle_todo', payload: todo.id });
  };

  const editTodo = () => {
    if (editMode) {
      dispatch({ type: 'edit_todo', payload: { id: todo.id, text: editText, priority: priority } });
    }
    setEditMode(!editMode);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input type='checkbox' checked={todo.isCompleted} onChange={toggleTodo}></input>
      {editMode ? (
        <Editform
            setPriority={setPriority}
            priority={priority}
            setEditText={setEditText}a
            editText={editText}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      {editMode ? null : <span style={{ marginLeft: '10px' ,backgroundColor: '#8c4cda', marginRight:'10px'}}>{todo.priority}</span>    }
      <button onClick={editTodo} form={(editMode?'edit-form':null)}>{editMode ? 'Save' : 'Edit'}</button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}

export default Todo;