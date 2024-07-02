import { IToDo } from "../types/data"
import { TodoItem } from "./TodoItem"

interface ITodoListProps {
    items: IToDo[],
    removeTodo: (id: number) => void,
    toggleTodo: (id: number) => void
}



const TodoList = (props: ITodoListProps) => {
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