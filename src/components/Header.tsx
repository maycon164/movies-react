import { useContext } from "react"
import { userContext } from "../context/UserContext"
import { Navbar } from "./NavBar"

export const Header = () => {

    const ctx = useContext(userContext)

    return (
        <header className="main-header">
            <div>
                <h1>
                    Manager-TSS
                </h1>
            </div>
            <div>
                loggend in as {ctx.name}
            </div>
            <Navbar />
        </header>
    )
}
