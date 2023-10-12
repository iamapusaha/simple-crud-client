

const Home = () => {
    const handleAddUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }
        console.log(user);
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