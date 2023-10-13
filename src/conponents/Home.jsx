

const Home = () => {
    const handleAddUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input className="border p-2" placeholder="name" type="text" name="name" /><br />
                <input className="border p-2" placeholder="email" type="email" name="email" id="" /><br />
                <button><input type="submit" value="Add User" /></button>
            </form>
        </div>
    );
};

export default Home;