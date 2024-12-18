import React from 'react'

function Editform({setEditText , editText , setPriority , priority}) {
  return (
    <form id='edit-form' onSubmit={(e) => e.preventDefault()} >
        <input
          type='text'
          onChange={(e) => {
            setEditText(e.target.value);
          }}
          value={editText}
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
    </form>
  )
}

export default Editform