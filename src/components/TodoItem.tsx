import { IToDo } from "../types/data"

interface ITodoItem extends IToDo {
    removeTodo: (id: number) => void,
    toggleTodo: (id: number) => void
}



const TodoItem: React.FC<ITodoItem> = (props) => {
    const { title, complete, removeTodo,toggleTodo, id } = props;
    return (
        <div>
            <input type="checkbox" checked={complete} onChange={()=>toggleTodo(id)}/>
            {title}
            <button onClick={()=>removeTodo(id)}>X</button>
        </div>
    )
}


export { TodoItem }