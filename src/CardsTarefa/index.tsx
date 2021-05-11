import React from 'react'

import {Container, Span, SubT, Stts} from './styles'

interface ICardsTarefa {
    title: string;
    subtitle: string;
    status: string;
    color: string;
} 

const Content: React.FC <ICardsTarefa> = ({
    title,
    subtitle, 
    status, 
    color
}) => {
    return (
        <Container color={color} >
            <Span>{title}</Span>
            <SubT>{subtitle}</SubT>
            <Stts>{status}</Stts>
        </Container>
    )
}

export default Content;