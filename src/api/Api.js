import React, {useState}from 'react'
import styles from './styles.css'
import addT from 'C:/Users/Vinicius Gonçalves/Documents/meus_produtos/src/assets/addTarefa.svg'



export default function Api () {
    const [Tarefas, setTarefas] = useState([
 {       "guid": "string",
        "refId": "string",
        "title": "string",
        "description": "string",
        "situation": "uncompleted"
}
    ])

 function handAddTarefas() {
     setTarefas([
       ...Tarefas,
     {id: Math.random (), name: "Nova Tarefa"}
     ]);
 }



return (
<>
 <button onClick= {handAddTarefas}>
   <h1>+</h1>   Nova Tarefa
   
 </button>


</>
)
}    