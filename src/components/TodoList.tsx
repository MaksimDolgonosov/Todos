import TodoItem from "./TodoItem"
import { IToDo } from "../types/data"

interface ITodoList {
    list: IToDo[]
}

const TodoList: React.FC<ITodoList> = ({ list }) => {
    return (
        <div>
            {
                list.map((todo: IToDo) => (
                    <TodoItem id={todo.id} title={todo.title} completed={todo.completed} key={todo.id} />
                ))
            }
        </div>

    )

}

export default TodoList;