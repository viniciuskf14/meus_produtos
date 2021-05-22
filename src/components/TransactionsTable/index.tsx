import React, {useEffect, useState} from 'react';
import {api} from '../../services/api';
import {Container, Title, Desc, LogImg} from './styles'
import axios from 'axios';
import {TaskItem} from './TaskItem'
import menu from '../../assets/menu.svg'

 

interface Tasks{
    guid: string,
    title: string,
    description: string,
    situation: string
    status: boolean
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
                        <section key = {task.guid} >
                        
                            <ul>
                                 <Title>{task.title}</Title> 
                                 <Desc>{task.description}</Desc>
                                 
                            </ul>
                        
                        <LogImg src = {menu} alt ="opções"></LogImg>
                        <button className = "excluir">
                       
                        </button>
                        </section>
                        
                   )       
               }
               )}
          
       </Container>
)}

export default TasksList;
