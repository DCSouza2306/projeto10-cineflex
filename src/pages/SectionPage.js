import { useParams } from "react-router-dom"
import axios from "axios"

export default function SectionPage(){

    const params = useParams()
    console.log(params);

    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.idFilm}/showtimes`)

    promise.then((resp) => {
        console.log(resp.data.days);
    })
    return(
      
        <>
        
        </>
    )
}