import axios from 'axios';
import React, { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { api } from '../services/api';
import {Container} from './styles'




interface NewTaskModalProps{
isOpen: boolean;
onRequestClose:() => void;
}

export function NewTaskModal({isOpen, onRequestClose}: NewTaskModalProps) {
    const [id, setID] = useState ([]);
    const [title, setTitle] = useState(''); //armazenar os valores(titulo e descrição) dentro do array
    const [description, setDescription] = useState('');

    // declaração da função que quero que seja executada toda vez que salvarem uma tarefa
    function handleCreateNewTask(event: FormEvent){
     event.preventDefault();
     
     const data ={
         id,
         title, 
         description
     }
     api.post('https://chronos.compraqui.app/api/tasks', data)
    
    };
    function handleSubmit(event: FormEvent){
        event.preventDefault();
        
      
        
          
    }
    return(
        
       
        <Modal isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName ="card-create-modal"
        className="modal-create"
        >
            
           <Container onSubmit = {handleCreateNewTask}>    
           
            <h2>Criar Tarefa</h2>
            <label>Nome da Tarefa</label>
            <input
            
            type = "String"
            required
            value = {title} //para que os valores digitados no input sejam interceptados
            onChange ={event => setTitle (String(event.target.value))}// função para que seja executada toda vez que o valor do input for alterado e assim, jogado pra dentro do array. 
            
            />
            <label>Descrição da Tarefa</label>
            
            <input
            type = "text"
            required  
            value = {description} //para que os valores digitados no input sejam interceptados 
            
            onChange ={event => setDescription (String(event.target.value))} // função para que seja executada toda vez que o valor do input for alterado e assim, jogado pra dentro do array.
          />

         
           
            
            <footer>
            <button 
            type = "submit"
            onClick = {onRequestClose}
            >Cancelar</button>
            
            <button 
            type = "submit"
            >Salvar</button>
            </footer>
          
           </Container>
        </Modal>
    );
}
export default NewTaskModal;