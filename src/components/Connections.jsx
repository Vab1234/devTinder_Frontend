import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";

export default function Connections(){
    const connections = useSelector((store) => store.connections); 
    const dispatch = useDispatch();

    const getConnections = async () => {
        try{
            const res = await axios.get(BASE_URL + "/user/connections" , {
                withCredentials : true,
            });
            console.log(res.data.data);
            dispatch(addConnection(res.data.data));
        }
        catch(err){
            console.error(err);
        }
    }

    useEffect(() => {
        getConnections();
    } , []);

    if(!connections) return;

    if(connections.length === 0) return <h1>No connections found</h1>

    return connections && (
        <div className="my-10">
            <h1 className="text-3xl font-bold text-center mb-20">Connections</h1>
            <div className="flex flex-wrap mx-10 justify-center">
            {connections.map((connection) => (
                <div className="mx-5 my-4">
                    <div className="card bg-base-100 w-60 h-100 shadow-xl">
                        <figure>
                            <img
                            src={connection.photoUrl}
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{connection.firstName + " " + connection.lastName}</h2>
                            
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}