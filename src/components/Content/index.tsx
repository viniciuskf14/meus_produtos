import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { Container, Button, SmallLogImg, Span } from './styles'
import addTarefa from '../../assets/addTarefa.svg'




interface ContentProps{
   onOpenNewTaskModal: () => void;
}

export function Content ({onOpenNewTaskModal}: ContentProps)  {    


    return (
        <Container>

            <Button type="button" onClick={onOpenNewTaskModal}>
               
                <SmallLogImg src={addTarefa} alt="Nova Tarefa" />
                <Span>Nova Tarefa</Span>
            </Button>

        </Container>

    )
}

export default Content;