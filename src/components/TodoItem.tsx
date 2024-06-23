import { IToDo } from "../types/data"

interface ITodoItem extends IToDo { }

const TodoItem: React.FC<ITodoItem> = (props) => {
    const { title, complete } = props;
    return (
        <div>
            <input type="checkbox" checked={complete} />
            {title}
            <button>X</button>
        </div>
    )
}


export {TodoItem}