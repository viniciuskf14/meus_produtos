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
background: rgba(0,0,0,0.5);
position: fixed;
align-items: center;
display:flex;
justify-content: center;
margin: 0 auto;
top:0;
bottom:0;
right: 0;
left: 0;

display:flex;
align-items: center;
justify-content: center;
}

.modal-create{
    width: 100%;
    max-width: 320px;
    height:290px;
    background:#FFFF;
    padding:3rem;
    position:relative;   
    border-radius: 10px 

}



`