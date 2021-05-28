import React from 'react'
import { Grid } from './styles'
import Aside from '../Aside'
import ContentHeader from '../../components/ContentHeader'

import TransactionsTable from '../TransactionsTable'


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