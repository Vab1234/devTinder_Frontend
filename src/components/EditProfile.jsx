import { useDebugValue, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

export default function EditProfile({user}) {
    // const {firstName , lastName , age , gender , photoUrl , description} = user;

    const [firstName , setFirstName] = useState(user.firstName);
    const [lastName , setLastName] = useState(user.lastName);
    const [age , setAge] = useState(user.age);
    const [gender , setGender] = useState(user.gender);
    const [photoUrl , setPhotoUrl] = useState(user.photoUrl);
    const [description , setDescription] = useState(user.description);
    const [error , setError] = useState("");
    const [showToast , setShoWToast] = useState(false);

    const dispatch = useDispatch();

    const saveProfile = async () => {
        try{
            const res = await axios.patch(BASE_URL + "/profile/edit" , {
                firstName,
                lastName,
                age,
                gender,
                photoUrl,
                description
            }, {
                withCredentials : true,
            });
            dispatch(addUser(res.data.data));
            setShoWToast(true)
            setTimeout(() => {
                setShoWToast(false);
            } , 2000);
        }
        catch(err){
            setError(err.message);
        }
    }
    

    return(
        <div className="flex my-10 justify-center">
            <div className = "flex mx-10">
                <div className="card bg-base-300 w-96 shadow-xl p-2">
                    <div className="card-body">
                        <h1 className="text-center mb-2 font-bold text-xl">Edit Profile</h1>
                        
                        <label className="input input-bordered flex items-center gap-2 m-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text"
                            className="grow" 
                            placeholder="Enter Your FirstName" 
                            value = {firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 m-2">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" 
                            className="grow" 
                            placeholder="Enter Your LastName"
                            value = {lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 m-2">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" 
                            className="grow" 
                            placeholder="Enter Your Age"
                            value = {age}
                            onChange={(e) => {
                                setAge(e.target.value);
                            }}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 m-2">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" 
                            className="grow" 
                            placeholder="Enter Your Gender"
                            value = {gender}
                            onChange={(e) => {
                                setGender(e.target.value);
                            }}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 m-2">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" 
                            className="grow" 
                            placeholder="Enter Your PhotoUrl"
                            value = {photoUrl}
                            onChange={(e) => {
                                setPhotoUrl(e.target.value);
                            }}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 m-2">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" 
                            className="grow" 
                            placeholder="Enter Your Description"
                            value = {description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            />
                        </label>
                        <button className="btn btn-primary" onClick= {saveProfile}>Update Profile</button>
                    </div>
                </div>
            </div>
            <UserCard user = {{firstName , lastName , age , gender , photoUrl , description}} />
            {showToast && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Profile Updated Successfully</span>
                </div>
            </div>}
        </div>
    )
}