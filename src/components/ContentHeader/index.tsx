import React, { useEffect, useState} from 'react';
import { api } from '../../services/api';
import { Container, Title } from './styles'



interface Task {
    title: string,
    content: string
}


const ContentHeader: React.FC = () => {
    

    return (

        <Container>

            <Title>Tarefas</Title>
            
        </Container>
    )
}




export default ContentHeader