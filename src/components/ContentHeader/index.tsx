import React, { useEffect } from 'react';
import { api } from '../../services/api';
import { Container, Title } from './styles'




const ContentHeader: React.FC = () => {

    useEffect(() => {
        api.get('/api/get').then(response => response.data)


    }, []


    );

    return (

        <Container>

            <Title>Tarefas</Title>

        </Container>
    )
}

export default ContentHeader;