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
height: 100px;
display:flex;
align-items: center;


`;
 

export const Title= styled.h3 `
font-weight: 500;
font-size: 16px;
line-height: 16px;
display:flex;
margin-left: -5px;
color: white;

`;


export const User = styled.div `
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin: -10px;
margin-top: -3px;


`;


export const Function = styled.p`
font-weight:300;
font-size:14px;
line-height: 25px;
display:flex;
color: white;
width: 49px;

`;


export const LogImg= styled.img `
height: 45px;
width: 90px;
top: -5px;
`;


export const BigLogImg = styled.img `
position: absolute;
left: 8.33%;
right: 8.33%;
top: 23%;
bottom: 33%;
display:flex;
align-items: center;
justify-content: center;
`;


export const Span = styled.p `
display: flex;
align-items: center;
justify-content: center;
font-weight: 500;
font-size: 15px;
color: white;
`;


export const MenuContainer= styled.nav `
display:flex;
flex-direction: column;
margin-top:70px;
border-top: 1px solid white;
width: 150px;
margin: auto;

`; 

export const MenuItemLink= styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 15px 55px;
top:15px;
margin:10px;
position: relative;
width: 142px;
height: 43px;
left: -10px;


background: 0047FF;
border-radius: 10px;
cursor: pointer;

/*mexer em uma propriedade especifica, no caso, no hover. Dar efeito ao passar o mouse*/ 
&:hover {
 opacity: .4;
 background-color:#0039CC;
}

>svg{
    font-size: 40px;
    margin-right: 20px
}

`;

export const Modal = styled.div``;