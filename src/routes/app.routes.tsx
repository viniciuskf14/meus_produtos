import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Tarefas from '../pages/Tarefas'
import Sobre from '../pages/Sobre'
import Layout from '../components/Layout'


const AppRoutes: React.FC = () => (
 <Layout>
    <Switch>
        <Route path="/tarefas" exact component={Tarefas}/>
        <Route path="/sobre" exact component={Sobre}/>
    </Switch>
 </Layout>

)

export default AppRoutes;