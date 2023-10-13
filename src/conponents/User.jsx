import { useLoaderData } from "react-router-dom";


const User = () => {
    const users = useLoaderData()
    return (
        <div>
            <h1>Total number of user{users.length}</h1>
            {
                users.map(user => <p key={user._id}>{user.name}</p>)
            }
        </div>
    );
};

export default User;