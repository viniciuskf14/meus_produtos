export function TaskItem (props){
    return (
        <li>
            <strong>{props.task.title}</strong>
            <p>{props.task.description}</p>
            <h2>{props.task.status}</h2>
        </li>
    )
}
export default TaskItem