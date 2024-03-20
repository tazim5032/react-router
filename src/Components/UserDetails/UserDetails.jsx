import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div className="text-cyan-500 font-bold">
            <h1 className="text-4xl">Name: {name}</h1>
            <p>User Website: {website}</p>
        </div>
    );
};

export default UserDetails;