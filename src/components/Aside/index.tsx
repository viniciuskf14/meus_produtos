import React from 'react'
import Perfil from '../../assets/perfil.svg'
import {Container, Header, Span, User, Function, LogImg, BigLogImg, Title, MenuContainer, MenuItemLink} from './styles';
import Tarefas from '../../assets/tarefas.svg'
import Sobre from '../../assets/sobre.svg'




const Aside: React.FC = () => {
    return (
       <Container>
           <Header>
               <LogImg src ={Perfil} alt = "Foto de Perfil"/>
             <User>
               <Title>Nome</Title>
               <Function>Função</Function>
            </User>
           </Header>

           <MenuContainer>
             
              <MenuItemLink>
                <BigLogImg src = {Tarefas} alt = "Logo Tarefas"/>
                 <Span> Tarefas </Span>
                </MenuItemLink>
              
              
              <MenuItemLink>
                 <BigLogImg src = {Sobre} alt = "Logo Sobre" />
                  <Span>Sobre</Span>
                </MenuItemLink>
           </MenuContainer>
        </Container>
    )
}

export default Aside;