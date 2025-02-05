import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

export default function Body(){
    return(
        <>
            <Navbar />
            <Outlet />  
            {/* any children of body component will render in the outlet */}
            <Footer />
        </>
    )
}