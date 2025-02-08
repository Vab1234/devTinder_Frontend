export default function UserCard({user}) {
    console.log(user);
    const {firstName , lastName , photoUrl , skills , age , gender , description} = user;
    return(
        <div className="card bg-base-300 w-96 shadow-xl">
            <figure>
                <img
                src={user.photoUrl}
                alt="profile photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{user.firstName + " " + user.lastName}</h2>
                <p>{description}</p>
                {age && gender && <p>{age + ", " + gender}</p>}
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn hover:bg-pink-400 bg-pink-300 text-slate-950">Interested</button>
                </div>
            </div>
        </div>
    )
}
