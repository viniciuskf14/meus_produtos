import React, {useState} from 'react';
import Modal from 'react-modal';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import Content from './components/Content'
import { NewTaskModal } from './NewTaskModal';


//Declaração de root para questões de acessibilidade, para dizer que não será possivel interagir com o restante da aplicação, pois o pop-up estará por cima dela.
Modal.setAppElement('#root');

const App: React.FC = () => {
    //REGRAS BOLEANAS PARA QUE ABRA E FECHE O POP-UP DE NOVA TAREFA, SENDO ASSIM, QUANDO TIVER TRUE ELE ABRE, QUANDO APERTA ESC OU CLICA FORA DO POP-UP ELE SE TORNA FALSO, FECHANDO-SE
const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
//abrir pop-up
function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true)
}
//fechar pop-up
function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false)
}

    return (
        <>
            <GlobalStyles />
                      
            <Content onOpenNewTaskModal = {handleOpenNewTaskModal}/>
            <Layout/>
            
                <NewTaskModal
                isOpen ={isNewTaskModalOpen}
                onRequestClose = {handleCloseNewTaskModal}
                />
            


        </>
    )
}

export default App;