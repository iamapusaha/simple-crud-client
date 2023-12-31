import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadUsers = useLoaderData()
    const handleUpdateUser = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }
        fetch(`http://localhost:5000/users/${loadUsers._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (

        < div >
            <h1 className="my-3">update for {loadUsers.name}</h1>
            <form onSubmit={handleUpdateUser}>
                <input className="border p-2 mb-2" type="text" name="name" defaultValue={loadUsers.name} /> <br />
                <input className="border p-2 mb-2" type="email" name="email" id="" defaultValue={loadUsers.email} /><br />
                <button className="btn"><input type="submit" value="update" /></button>
            </form>
        </div >
    );
};

export default Update;