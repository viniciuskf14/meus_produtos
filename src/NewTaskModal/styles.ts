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
    width: 100%;
    padding: 0 1rem;
    height: 2.25rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background:#FFFF;
    font-weight: 400;
    font-size: 1rem;
    margin: 5px;
   
    


    & + input{
        margin-top: 1rem;
    }
}
button[type="submit"]{
    
    padding-left: 0px;
    padding-right: 0px;
    margin-top: 50px;
    margin-left: 10px;
    width: 5.75rem;
    padding-bottom: 5px;
    text-transform: uppercase;
    background-color: white;
    color: #0047FF;
    font-family: Roboto;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

     &:hover{

     }
}

`;