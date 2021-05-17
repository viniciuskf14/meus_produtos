import React, { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import {Container} from './styles'




interface NewTaskModalProps{
isOpen: boolean;
onRequestClose:() => void;
}

export function NewTaskModal({isOpen, onRequestClose}: NewTaskModalProps) {
    const [title, setTitle] = useState(''); //armazenar os valores(titulo e descrição) dentro do array
    const [content, setContent] = useState('');

    // declaração da função que quero que seja executada toda vez que salvarem uma tarefa
    function handleCreateNewTask(event: FormEvent){
     event.preventDefault();

     const newTask = {
        title, content
        
    }};
     
    const TaskContent = []
    
    return (
        
       
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
            onChange ={event => setTitle (event.target.value)}// função para que seja executada toda vez que o valor do input for alterado e assim, jogado pra dentro do array. 
            
            />
            <label>Descrição da Tarefa</label>
            
            <input
            type = "text"
            required  
            value = {content} //para que os valores digitados no input sejam interceptados 
            
            onChange ={event => setContent (event.target.value)} // função para que seja executada toda vez que o valor do input for alterado e assim, jogado pra dentro do array.
          />

         
           
            <button 
            type = "button"
            onClick = {onRequestClose}
            >Cancelar</button>
            
            <button 
            type = "submit"
            >Salvar</button>
            
          
           </Container>
        </Modal>
    );
}