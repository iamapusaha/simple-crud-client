

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
                <input type="text" name="name" /><br />
                <input type="email" name="email" id="" /><br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default Home;