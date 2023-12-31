import { useState } from 'react';
import { Todo } from './types';
import NewTodoForm from './components/NewTodoForm';
import './App.css';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: Todo['id']) => {
    setTodos((todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      return {
        ...todo,
        completed: !todo.completed,
      };
    })));
  };

  const removeTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((response) => response.json())
  //     .then((data: Todo[]) => setTodos(data));
  // }, []);

  return (
    <div className="App">
      <NewTodoForm handleClick={addTodo} />
      <TodoList list={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
