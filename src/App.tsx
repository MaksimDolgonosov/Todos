import { useState, useEffect, useRef } from 'react';
import { IToDo } from './types/data';
import { TodoList } from './components/TodoList';
import './App.css'

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<IToDo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();

  }, [])

  const onHandleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }

  const addTodoWithKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (key) => {
    if (key.code === "Enter") {
      if (value) {
        setTodos([...todos, {
          id: Date.now(),
          title: value,
          complete: false
        }])
        setValue("");
      }
    }
  }

  const addTodo = () => {
    if (value) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false
      }])
      setValue("");
    }
  }

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  
  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) {
        return todo
      } else {
        return { ...todo, complete: !todo.complete }
      }
    }));
  }

  return (
    <div>
      <input value={value} onChange={onHandleChange} ref={inputRef} onKeyDown={addTodoWithKeyDown} />
      <button onClick={addTodo} >Add</button>
      <div>
        <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      </div>
    </div>


  )
}

export default App
