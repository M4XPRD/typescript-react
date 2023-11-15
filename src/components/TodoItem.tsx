import React from 'react';
import { Todo } from '../types';

interface TodoItemProps extends Todo {
  toggleTodo: (id: Todo['id']) => void,
  removeTodo: (id: Todo['id']) => void,
  style?: React.CSSProperties,
}

const TodoItem = ({
  id, title, completed, style = {}, toggleTodo, removeTodo,
}: TodoItemProps) => (
  <li style={style}>
    <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
    <span>{title}</span>
    <button type="button" onClick={() => removeTodo(id)}>&times;</button>
  </li>
);

// TodoItem.defaultProps = {}; эти типы можно не использовать

export default TodoItem;
