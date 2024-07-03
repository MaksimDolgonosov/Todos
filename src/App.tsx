import { useState, useEffect, useRef } from 'react';
import { IToDo } from './types/data';
import { TodoList } from './components/TodoList';
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/hook';
import { fetchTodos } from './store/todoSlice';

const App: React.FC = () => {
  const list = useAppSelector(state => state.todos.list);

  console.log(list)
  const [value, setValue] = useState("");
  // const [todos, setTodos] = useState<IToDo[]>([]);

  const dispach = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    dispach(fetchTodos())
  }, [])

  const onHandleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }


  const addTodo = () => {
    // if (value) {
    //   setTodos([...todos, {
    //     id: Date.now(),
    //     title: value,
    //     complete: false
    //   }])
    //   setValue("");
    // }
  }

  const removeTodo = (id: number): void => {
    // setTodos(todos.filter(todo => todo.id !== id));
  }

  const toggleTodo = (id: number): void => {
    // setTodos(todos.map(todo => {
    //   if (todo.id !== id) {
    //     return todo
    //   } else {
    //     return { ...todo, complete: !todo.complete }
    //   }
    // }));
  }

  return (
    <div>
      <input name='todoInput' value={value} onChange={onHandleChange} ref={inputRef} />
      <button onClick={addTodo} >Add</button>
      <div>
        <TodoList items={list} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      </div>
    </div>


  )
}

export default App
