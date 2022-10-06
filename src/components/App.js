import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalPage from "../pages/PrincipalPage";
import SeatPage from "../pages/SeatPage";
import SectionPage from "../pages/SectionPage";
import SucessPage from "../pages/SucessPage";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<PrincipalPage />} />
                <Route path="/sessoes/:idFilm" element={<SectionPage />} />
                <Route path="/sessao" element={<SeatPage />} />
                <Route path="/sucesso" element={<SucessPage />} />
            </Routes>

        </BrowserRouter>

    )

}
