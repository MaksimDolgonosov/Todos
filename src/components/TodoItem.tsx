import { IToDo } from "../types/data";
import { removeTodo, toggleCompleted } from "../store/todoSlice";
import { useAppDispatch } from "../hooks/hook";
import { fetchRemoveTodo } from "../store/todoSlice";


const TodoItem: React.FC<IToDo> = ({ title, id, completed }) => {
const dispach = useAppDispatch();
    return (
        <div>
        <input type="checkbox" checked={completed} onChange={() => dispach(toggleCompleted(id))} />
        {title}
        <button onClick={() => dispach(fetchRemoveTodo(id))}>X</button>
    </div>
    )

}


export default TodoItem;