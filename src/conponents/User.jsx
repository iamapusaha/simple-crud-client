import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const User = () => {
    const loadUsers = useLoaderData()
    const [users, setUsers] = useState(loadUsers)
    const handleDelete = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remaing = users.filter(user => user._id !== id)
                    setUsers(remaing)
                    alert("Successfully deleted one document.");
                }
            })
    }
    return (
        <div>
            <h1>Total number of user{users.length}</h1>
            {
                users.map(user => <p key={user._id}>{user.name} <Link to={`/update/${user._id}`}><button>update</button></Link> <button onClick={() => handleDelete(user._id)}>x</button></p>)
            }
        </div>
    );
};

export default User;