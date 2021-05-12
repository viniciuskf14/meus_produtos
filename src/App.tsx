import React from 'react';
import Api from './api/Api.js';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import Tarefas from './pages/Tarefas'





const App: React.FC = () => {
    return(
        <>
            <GlobalStyles/>
            <Layout>
                <Api/>
                <Tarefas/>
            </Layout>
               
            
            </>
            )
}

export default App;