import { Outlet } from "react-router"
import Navbar from "../SharedComponents/Navbar/Navbar"
import Footer from "../SharedComponents/Footer/Footer"

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainLayout