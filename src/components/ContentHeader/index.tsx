import React, { useEffect, useState} from 'react';
import { api } from '../../services/api';
import { Container, Title } from './styles'



interface Task {
    title: string,
    content: string
}


const ContentHeader: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    function updateTasks(tasks:Task[]){
        setTasks(tasks);
    }
    
    useEffect(() => {
        api.get('/api/get').then(response => response.data)


    }, []


    );

    return (

        <Container>

            <Title>Tarefas</Title>
            {tasks.map(task => (
                <div>
                    <h1>{task.title}</h1>
                    <h2>{task.content}</h2>
                </div>
            ))}
        </Container>
    )
}




export default ContentHeader