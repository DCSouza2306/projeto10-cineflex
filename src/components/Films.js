import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Films({ title, url, id }) {
    return (
        <Film>
            <Link to={`/sessoes/${id}`}>
                <img src={url} alt={`Capa do filme ${title}`} />
            </Link>
        </Film>
    )
}

const Film = styled.div`
width: 145px;
height: 209px;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
margin: 20px 10px;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
position: relative;

&:hover{
    cursor: pointer;
    filter: brightness(0.8)
}

img{
    width:129px;
    height:193px;
}
`