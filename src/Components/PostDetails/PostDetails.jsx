import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {body} = post;
    return (
        <div className="w-[200px] bg-yellow-500 rounded-3xl ml-[44%] my-12">
            <h1 className="text-medium font-bold text-yellow-800 p-4">{body}</h1>
        </div>
    );
};

export default PostDetails;