import { IToDo } from "../types/data"
import { TodoItem } from "./TodoItem"

interface ITodoListProps {
    items: IToDo[]
}



const TodoList = (props: ITodoListProps) => {
    return (
        <div>
            {props.items.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </div>
    )
}

export { TodoList }