import TodoItem from "./TodoItem";

function TodoList({
    todoData,
    handleStatus
}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>
                {todoData.map(x => <TodoItem key={x._id} todo={x} handleStatus={handleStatus} />)}
            </tbody>
        </table>
    )
}
export default TodoList;