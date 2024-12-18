const initialState = {
    todos: [],
    filter: 'all'
  };
  
  function TodoReducer(state = initialState, action) {
    switch (action.type) {
      case 'add_todo':
        return {
          ...state,
          todos: [...state.todos, { id: Date.now(), text: action.payload.text, isCompleted: false ,priority:action.payload.priority }]
        };
      case 'delete_todo':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
      case 'toggle_todo':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
          )
        };
      case 'edit_todo':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload.id ? { ...todo, text: action.payload.text, priority:action.payload.priority } : todo
          )
        };
      case 'set_filter':
        return {
          ...state,
          filter: action.payload
        };
      default:
        return state;
    }
  }
  
  export default TodoReducer;