import { BASE_URL } from "../utils/constants"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet, useNavigate } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useEffect } from "react"

export default function Body(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user);

    const fetchUser = async () => {
        if(userData) return;
        try{
            const user = await axios.get(BASE_URL + "/profile/view" , {
                withCredentials : true,
            });
            dispatch(addUser(user.data));
        }
        catch(err){
            if(err.status === 401){
                navigate("/login");
            }
            console.error(err);
        }
    }

    useEffect(() => {
        fetchUser();
    },[])
    return(
        <>
            <Navbar />
            <Outlet />  
            {/* any children of body component will render in the outlet */}
            {/* <Footer /> */}
        </>
    )
}