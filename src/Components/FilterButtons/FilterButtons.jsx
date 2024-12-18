import React, { useContext } from 'react';
import TodoContext from '../../Context/TodoContext';
import './FilterButtons.css';

function FilterButtons() {
  const { state, dispatch } = useContext(TodoContext);

  const setFilter = (filter) => {
    dispatch({ type: 'set_filter', payload: filter });
  };

  return (
    <div className="filter-buttons">
      <button
        className={state.filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={state.filter === 'active' ? 'active' : ''}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        className={state.filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
