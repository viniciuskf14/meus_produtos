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



input[type = "String"]{
  width: 200px;
  height: 30px;
  margin-bottom: 10px;
  border: 2px solid #d7d7d7;
  border-radius: 5px;
 
}

input[type = "text"]{
  display: flex;
  border: 2px solid #d7d7d7;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  
}


button[type ="submit"]{
    margin-top: 15px;
    margin-left: 52px;
    width: 3.75rem;
    padding-bottom: 5px;
    text-transform: uppercase;
    color: #0047FF;
    background-color: #FFFF;
    font-weight: 600;
    font-size: 14px;
  
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