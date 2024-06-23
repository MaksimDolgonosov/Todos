import { useState, useEffect, useRef } from 'react';
import { IToDo } from '../types/data';
import { TodoList } from './TodoList';
import '../App.css'

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
  return (
    <div>
      <input value={value} onChange={onHandleChange} ref={inputRef} />
      <button onClick={addTodo}>Add</button>
      <div>
        <TodoList items={todos} />
      </div>
    </div>


  )
}

export default App
