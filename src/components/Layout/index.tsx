import React from 'react'
import {Grid} from './styles'
import Content from '../Content'
import Aside from '../Aside'
import ContentHeader from '../../components/ContentHeader'


const Layout: React.FC = () => {
    return (
        <Grid>
        <Aside/>
        <ContentHeader/>
        <Content>
           
        </Content>
        </Grid>    
    )
}

export default Layout;