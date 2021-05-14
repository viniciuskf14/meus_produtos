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
    padding: 0 0.5rem;
    height: 2.25rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background:#FFFF;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
        color: var(--text-body);
      //n ta pegando, em analise
    }

    & + input{
        margin-top: 1rem;
    }
}
button[type="submit"]{
    
    display: inline-block;
    width: 150px;
    margin: -5px 9rem;
    padding:0.15rem 1rem;
 


height: 2rem;
background: white;
border-radius: 0.25rem;
border: 0;
margin-top: 1.5rem;
background-color: black;
color: #0047FF;
font-size: 17px;


}

`;


