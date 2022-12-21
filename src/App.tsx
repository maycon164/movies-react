import { Home } from "./pages"
import { GlobalProvider } from "./context/UserContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MoviesPage } from "./pages/MoviesPage"

export const App = () => {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    )
}
