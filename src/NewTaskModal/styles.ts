import styled from 'styled-components';

export const Container = styled.form `
 
h2{
    position: absolute;
width: 154px;
height: 22px;
left: 20px;
top: 10px;

font-family: Roboto;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
/* identical to box height */

color: #000000;
}



input{
    position: static;
height: 38px;
left: 0px;
right: 161px;
top: calc(50% - 38px/2 - 1px);
border: 2px solid #d7d7d7;
border-radius: 0.5rem;
/* Input/Label */

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
/* or 119% */


/* Text/Active */

color: rgba(0, 0, 0, 0.87);


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
}
button[type="submit"]{
    
    padding-left: 0px;
    padding-right: 0px;
    margin-top: 50px;
    margin-left: 10px;
    width: 5.75rem;
    padding-bottom: 5px;
    text-transform: uppercase;
    color: #0047FF;
    background-color: #FFFF;
    font-family: Roboto;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

     
}

label{
    position: static;
height: 12px;
left: 0px;
right: 0px;
top: calc(50% - 12px/2);

/* label/floating */

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 12px;
/* identical to box height, or 100% */

letter-spacing: 0.0015em;

/* Text/Inactive */

color: rgba(0, 0, 0, 0.6);


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 2px;
}

`;