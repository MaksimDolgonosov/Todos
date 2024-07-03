import { IToDo } from "../types/data"
import { TodoItem } from "./TodoItem"
// import { useAppSelector } from "../hooks/hook"

interface ITodoListProps {
    items: IToDo[],
    removeTodo: (id: number) => void,
    toggleTodo: (id: number) => void
}



const TodoList = (props) => {
    // const list = useAppSelector(state => state.todos.list);

    return (
        <div>
            {props.items.map(todo => <TodoItem
                removeTodo={props.removeTodo}
                key={todo.id}
                {...todo}
                toggleTodo={props.toggleTodo} />)}
        </div>
    )
}

export { TodoList }