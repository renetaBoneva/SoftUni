function TodoItem({
    todo, 
    handleStatus
}) {
    return (
        <tr className={todo.isCompleted ? "todo is-completed" : "todo"}>
            <td>{todo.text}</td>
            <td>{todo.isCompleted ? 'Complete' : "Not Comlete"}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => handleStatus(todo._id)}>Change status</button>
            </td>
        </tr>
    )
}

export default TodoItem;