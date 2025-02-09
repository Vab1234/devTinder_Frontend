import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

export default function Feed() {
    const feed = useSelector((store) => store.feed);
    const dispatch = useDispatch();
    // console.log(feed)

    const getFeed = async () => {
        if(feed){
            // console.log(feed)
            return;
        }
        try{
            const res = await axios.get(BASE_URL + "/user/feed" ,{
                withCredentials : true,
            });

            // console.log(res.data);
            dispatch(addFeed(res?.data?.users));
            // console.log(feed)
        }
        catch(err){
            console.error(err);
        }
    };

    useEffect(() => {
        // console.log("in effect")
        getFeed();
    } , []);

    // console.log(feed)

    return feed && (
        <div className = "flex justify-center mt-6">
            <UserCard  user={feed[0]} />
        </div>
    )
}