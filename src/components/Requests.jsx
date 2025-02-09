import axios from "axios"
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";

export default function Requests() {

    const dispatch = useDispatch();
    const requests = useSelector(store => store.requests);

    const reviewRequest = async (status , _id) => {
        try{
            const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id , {} , {
                withCredentials : true
            })
            // console.log(res);
            dispatch(removeRequest(_id));
        }
        catch(err){
            console.error(err);
        }
    }

    const getRequests = async () => {
        const res = await axios.get(BASE_URL + "/user/requests/received" , {
            withCredentials : true,
        });
        // console.log(res.data.data);
        dispatch(addRequest(res.data.data));
    }   

    useEffect(() => {
        getRequests();
    } , []);

    if(!requests) return;
    if(requests.length === 0) return <h1 className="text-center m-10">No connection requests found</h1>

    return requests && (
        <div>
            <h1 className="text-3xl font-bold text-center my-10">Requests</h1>
            <div className="flex flex-wrap my-5 mx-8">
                {requests.map((request) => {
                    const _id = request._id;
                    const fromUser = request?.fromUserId;
                    return (
                        <div key={fromUser._id} className="card bg-base-300 w-60 h-120 shadow-xl">
                            <figure>
                                <img
                                src={fromUser.photoUrl}
                                alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{fromUser.firstName + " " + fromUser.lastName}</h2>
                            </div>
                            <div className="card-actions justify-center mb-3">
                                <button className="btn btn-primary" onClick={() => {
                                    reviewRequest("rejected" , fromUser._id)
                                }}>Reject</button>
                                <button className="btn hover:bg-pink-400 bg-pink-300 text-slate-950" onClick={() => [
                                    reviewRequest("accepted" , _id)
                                ]}>Accept
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}