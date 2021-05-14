import Modal from 'react-modal';
import {Container} from './styles'


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
            <input
            type = "String"
            placeholder ="Nome da Tarefa"
            />
            <input
            type = "String"
            placeholder ="Descrição da Tarefa"
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