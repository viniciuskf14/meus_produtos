import React from 'react'
import {Grid} from './styles'
import Content from '../Content'
import Aside from '../Aside'

const Layout: React.FC = () => {
    return (
        <Grid>
        <Aside/>
        <Content/>
        </Grid>    
    )
}

export default Layout;