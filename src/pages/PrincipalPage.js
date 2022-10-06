import styled from "styled-components"
import Films from "../components/Films"
import axios from "axios";
import { useState, useEffect } from "react";

export default function PrincipalPage(){
    const [films, setFilms] = useState([]);

    
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    
        promise.then(resp => {
            setFilms(resp.data)
        }) 
    }, [])

    return(
        <Container>
            <h1>Selecione o Filme</h1>
            <div className="lista-filmes">
            {films.map((f) => <Films key={f.id} id={f.id} title={f.title} url={f.posterURL} /> )}
            </div>
        </Container>
    )
}

const Container = styled.div `
width: 375px;
height: calc(100vh - 67px);
border: 1px solid lightgray;
display: flex;
align-items: center;
flex-direction: column;
overflow: hidden;
overflow-y: scroll;

.lista-filmes{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

h1{
    font-size:24px;
    margin: 30px 0;
}
`