import React, {useEffect, useState} from 'react';
import {api} from '../../services/api';
import {Container, Title, Desc} from './styles'
import axios from 'axios';
import {TaskItem} from './TaskItem'


interface Tasks{
    guid: string,
    title: string,
    description: string,
    situation: string
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
       
           
           
           {Tasks.map(task =>{
                   return( 
                        <section>
                        <ul key = {task.guid}>
                        <Title>{task.title}</Title> 
                        <Desc>{task.description}</Desc>
                        </ul>
                        </section>
                   )
                    
               }
               )}
          
       </Container>
)}

export default TasksList;
