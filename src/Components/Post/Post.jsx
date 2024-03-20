import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className="bg-blue-200 rounded-xl flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-red-900">Id: {id}</h1>
            <h1 className="text-xl font-medium text-blue-800">{title}</h1>
            <Link to={`/post/${id}`}><button className="p-2 bg-red-400 rounded-full text-bold mb-2">Post Details</button></Link>
          
        </div>
    );
};

export default Post;