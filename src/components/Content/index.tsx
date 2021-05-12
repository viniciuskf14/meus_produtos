import React, {useState} from 'react'
import Modal from 'react-modal'
import {Container, Button, SmallLogImg} from './styles'
import addTarefa from '../../assets/addTarefa.svg'

const Content: React.FC = () => {
    
    
   const [newTarefaOpen, setNewTarefaOpen] = useState(false);
        
           function handleOpenNewTarefaModal (){
              setNewTarefaOpen(true)
           }
      
           function handleCloseNewTarefaModal(){
              setNewTarefaOpen(false)
           }
      
    
    
    return (
        <Container>
            
            <Button type ="button" onClick={handleOpenNewTarefaModal}>
            <SmallLogImg src = {addTarefa} alt ="Nova Tarefa"/>
                Nova Tarefa
            </Button>

            <Modal isOpen = {newTarefaOpen}
            onRequestClose ={handleCloseNewTarefaModal}
            >
                <h2>Nova Tarefa</h2>
            </Modal>


        </Container>
        
    )
}

export default Content;