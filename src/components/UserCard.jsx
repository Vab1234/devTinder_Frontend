import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

export default function UserCard({user}) {

    const dispatch = useDispatch();

    const handleRequest = async (status , userId) => {
        try{
            const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId , {} , {
                withCredentials : true
            });
            console.log(res);
            dispatch(removeUserFromFeed(userId));
        }   
        catch(err){
            console.error(err);
        }
    }


    console.log(user);
    // const {firstName , lastName , photoUrl , skills , age , gender , description} = user;
    return(
        <div className="card bg-base-300 w-96 shadow-xl">
            <figure>
                <img
                src={user.photoUrl}
                alt="profile photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{user.firstName + " " + user.lastName}</h2>
                <p>{user.description}</p>
                {user.age && user.gender && <p>{user.age + ", " + user.gender}</p>}
                <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={() => {
                        handleRequest("ignored" , user._id);
                    }}>Ignore</button>
                    <button className="btn hover:bg-pink-400 bg-pink-300 text-slate-950" onClick={() => {
                        handleRequest("interested" , user._id);
                    }}>Interested</button>
                </div>
            </div>
        </div>
    )
}
