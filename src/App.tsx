import TodoList from './components/TodoList'

import './App.css'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/hook';
import { addTodo, fetchTodos } from './store/todoSlice';



const App: React.FC = () => {
  const { list, loading } = useAppSelector(state => state.todos);
  const [text, setText] = useState("");
  const dispach = useAppDispatch();

  useEffect(() => {
    dispach(fetchTodos())
  }, [])


  const onAddToto: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (text) {
      dispach(addTodo(text));
      setText("");
    }
  }

  return (

    <div>
      <input type="text" onChange={e => setText(e.target.value)} value={text} style={{ marginRight: "10px" }} />
      <button onClick={onAddToto}>Add todo</button>
      {loading ? <div>Loading...</div> : null}
      {<TodoList list={list} />}


    </div>

  )
}

export default App
