import React from 'react'
import {Container, Title} from './styles'
const Content: React.FC = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Content;