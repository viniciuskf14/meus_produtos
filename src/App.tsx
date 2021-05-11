import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import Tarefas from './pages/Tarefas'


const App: React.FC = () => {
    return(
        <>
            <GlobalStyles/>
            <Layout>
                <Tarefas/>
            </Layout>
               
            
            </>
            )
}

export default App;