import React from 'react'
import { Grid } from './styles'
import Content from '../Content'
import Aside from '../Aside'
import ContentHeader from '../../components/ContentHeader'
import Tarefas from '../../pages/Tarefas'



const Layout: React.FC = () => {
    return (
        <Grid>
            <Aside />
            <ContentHeader />

        </Grid>
    )
}

export default Layout;