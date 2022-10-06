import styled from "styled-components"

export default function Header(){
    return(
        <Cabeçalho>
            <p>cineflex</p>
        </Cabeçalho>
    )
}

const Cabeçalho = styled.header `
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
font-size: 34px;
font-family: 'Roboto';
color: #E8833A;

width:375px;
height: 67px;
background-color: #C3CFD9;

`
