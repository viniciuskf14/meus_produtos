import styled from 'styled-components'



export const Container = styled.div `
grid-area: AS;
width: 192px;
height: 913px;
left: 0px;
top: 0px;

background: #0047FF;
`;


export const Header = styled.header `
height: 70px;
display:flex;
align-items: center;


`;
 

export const Title= styled.h3 `
display:flex;
margin-left: 10px;
color: white;

`;


export const User = styled.div `
display: flex;
flex-direction: column;
margin: -10px;
`;


export const Function = styled.p`
display:flex;
margin-left: 10px;
color: white;
`;


export const LogImg= styled.img `
height: 45px;
width: 90px;
`;


export const BigLogImg = styled.img `
position: absolute;
left: 12.5%;
align-items: center;
justify-content: center;
`;


export const Span = styled.p `
font-weight: 500;
font-size: 14px;
color: white;
`;


export const MenuContainer= styled.nav `
display:flex;
flex-direction: column;
margin-top:50px;
border-top: 1px solid white;
width: 100px;
margin: auto;

`; 

export const MenuItemLink= styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 18px;
margin:10px;
position: relative;
width: 132px;
height: 40px;
left: -30px;


background: #0039CC;
border-radius: 10px;
/*mexer em uma propriedade especifica, no caso, no hover. Dar efeito ao passar o mouse*/ 
&:hover {
 opacity: .4;
}

>svg{
    font-size: 40px;
    margin-right: 20px
}

`;

