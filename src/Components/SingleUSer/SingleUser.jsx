import { Link } from "react-router-dom";

const SingleUser = ({ user }) => {
    const { id, name, email, phone } = user;
    return (
        <div className="p-10 rounded-xl bg-cyan-100">
            <h1 className="text-5xl">Name: {name}</h1>
            <h1>Phone: {phone}</h1>
            <h1>Email : {email}</h1>
            <Link to={`/user/${id}`}><button className="p-4 bg-green-400 text-black font-bold rounded-xl mt-2">Show Details</button></Link>
        </div>
    );
};

export default SingleUser;