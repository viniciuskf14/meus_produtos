import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
margin: 0;
padding:0;
box-sizing: border-box;
color: black
}

html, body, #root{
    height:100%
}

*, button, input{
    border: 0;
    outline:0;
    font-family: 'Roboto', sans-serif;
}

button{
    cursor:pointer;
};

.card-create-modal{
position: absolute;
width: 315px;
height: 294px;
display: flex;
left: 526px;
top: 217px;
align-items: center;
justify-content: center;
background: #FFFF;
border: 1px solid #d7d7d7;
border-radius: 10px;
}

.modal-create{
    width: 100%;
    max-width: 576px;
    background:var(--background);
    padding:3rem;
    position:relative;    //posicionar o botão de fechar dentro do card
    border-radius: 10px 

}


`