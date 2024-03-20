import { useLoaderData, useRouteError } from "react-router-dom";
import SingleUser from "../SingleUSer/SingleUser";

const User = () => {

    const users = useLoaderData()
    return (
        <div className="text-red-500">
            <h1 className="text-2xl">Our Users: {users.length}</h1>
            <p>Fantastic Raw Users</p>
            <div className="grid grid-cols-2 gap-12 mx-12 my-12">
                {
                    users.map(user => <SingleUser key={user.id} user={user}></SingleUser> )
                }
            </div>
        </div>
    );
};

export default User;