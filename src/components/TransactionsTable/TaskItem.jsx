export function TaskItem (props){
    return (
        <li>
            <strong>{props.task.title}</strong>
            <p>{props.task.description}</p>
            
        </li>
    )
}
export default TaskItem