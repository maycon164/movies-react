import { Navbar } from "../components/NavBar"

export const Home = () => {
    return (
        <div className="page-home">
            <div className="box-welcome">
                <h1>Welcome to Home Page</h1>
                <h3>e-movies-next-page</h3>

                <div>
                    <Navbar />
                </div>

            </div>
        </div>
    )
}