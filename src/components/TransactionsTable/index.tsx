import React, {useEffect, useState, FormEvent} from 'react';
import {api} from '../../services/api';
import {Container, Title, Desc, LogImg} from './styles'
import axios from 'axios';
import {TaskItem} from './TaskItem'


 

    
interface Tasks{
    id: number;
    guid: string,
    title: string,
    description: string,
    situation: string
    status: boolean
}


export function TasksList (){
    let [Tasks, setTasks] = useState<Tasks[]>([]);
 
    useEffect (() => {
        loadTasks()
    }, [])
    
async function loadTasks() {
    const response = await api.get ('/api/tasks')
    
    setTasks(response.data)
}

    useEffect(() => {
           fetch('https://chronos.compraqui.app/api/tasks')
           .then(response => response.json())
           .then(data => setTasks(data))
        }, [Tasks])   
     
    async function deleteTask(id: number){
        axios.delete('​https://chronos.compraqui.app/api/tasks/1')
        loadTasks()
    }
return(
   
    <Container>
           
           {Tasks.map(task =>{
                   return( 
                        <section key = {task.id} >
                        
                           
                                 <Title>{task.title}</Title> 
                                 <Desc>{task.description}</Desc>
                             
                            
                        
                        
                        <button 
                        key = {task.id}
                        onClick = {() => deleteTask(task.id)}>
                        Excluir
                        </button>
                        <button >Editar</button>
                        </section>
                        
                   )       
               }
               )}
          
       </Container>
       
)}

export default TasksList;
