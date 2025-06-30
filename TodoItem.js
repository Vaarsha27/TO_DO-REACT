import React from 'react';

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li
      style={{
        marginBottom: '10px',
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      <span onClick={onToggle} style={{ cursor: 'pointer' }}>{todo.text}</span>
      <button onClick={onDelete} style={{ marginLeft: '10px' }}>Delete</button>
    </li>
  );
}

export default TodoItem;
