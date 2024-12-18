import { useReducer, useState } from 'react'
import './App.css'

import TodoContext from './Context/TodoContext'
import AddTodo from './Components/AddTodo/AddTodo'
import TodoReducer from './Reducers/TodoReducer'
import TodoList from './Components/TodoList/TodoList'
import FilterButtons from './Components/FilterButtons/FilterButtons'
function App() {
  const [state , dispatch] = useReducer(TodoReducer, {todos:[] , filter:'all'})
  return (
    <TodoContext.Provider value={{state , dispatch}}>
      <AddTodo />
      <FilterButtons/>
      <TodoList />
    </TodoContext.Provider>
  )
}

export default App
