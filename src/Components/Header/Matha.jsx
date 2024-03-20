import { Link } from "react-router-dom";

const Matha = () => {
    return (
        <div className="font-bold">
            <nav>
                <span className="mr-10 text-green-700">Tazim Arena</span>
                <Link className="text-blue-500 mr-6" to="/">Home</Link>
                <Link className="text-blue-500 mr-6" to="/Users">Users</Link>
                <Link className="text-blue-500 mr-6" to="/posts">Posts</Link>
                <Link className="text-blue-500 mr-6" to="/about">About</Link>
                <Link className="text-blue-500 mr-6" to="/contact">Contact Us</Link>
            </nav>

        </div>
    );
};

export default Matha;