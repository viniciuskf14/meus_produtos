import React from 'react'
import { Grid } from './styles'
import Content from '../Content'
import Aside from '../Aside'
import ContentHeader from '../../components/ContentHeader'
import Tarefas from '../../pages/Tarefas'
import TransactionsTable from '../../components/TransactionsTable'


const Layout: React.FC = () => {
    return (
        <Grid>
            <Aside />
            
            <ContentHeader />
            <TransactionsTable/>
        </Grid>
    )
}

export default Layout;