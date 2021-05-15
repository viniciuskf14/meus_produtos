import Modal from 'react-modal';
import {Container} from './styles'
import { RiCloseLine } from "react-icons/ri";

interface NewTaskModalProps{
isOpen: boolean;
onRequestClose:() => void;
}

export function NewTaskModal({isOpen, onRequestClose}: NewTaskModalProps) {
    return (
       
        <Modal isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName ="card-create-modal"
        className="modal-create"
        >
           <Container>     
            <h2>Criar Tarefa</h2>
            <label>Nome da Tarefa</label>
            <input
            
            type = "String"
            
            />
            <label>Descrição da Tarefa</label>
            
            <input
            type = "String"

            />
           
            <button 
            type = "submit"
            >Cancelar</button>
            
            <button 
            type = "submit"
            >Salvar</button>
          
           </Container>
        </Modal>
    );
}