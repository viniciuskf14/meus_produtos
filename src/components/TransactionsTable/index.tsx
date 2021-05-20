import React, {useEffect, useState} from 'react';
import {api} from '../../services/api';
import {Container} from './styles'
import axios from 'axios';
import {TaskItem} from './TaskItem'

interface Tasks{
    guid: string,
    title: string,
    description: string,
}

export function TasksList (){
    const [Tasks, setTasks] = useState<Tasks[]>([]);

    useEffect(() => {
           fetch('https://chronos.compraqui.app/api/tasks')
           .then(response => response.json())
           .then(data => setTasks(data))
    }, [Tasks])


return(
    <Container>
       <section className ="ListTasks">
           <h1>Lista de Tarefas</h1>
           <ul>
               {Tasks.map(task =>{
                   return <TaskItem key = {task.guid} task = {task}/>
               }
               )}
               
          </ul>
          
       </section>
       
       </Container>
)
};
export default TasksList;
