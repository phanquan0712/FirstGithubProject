import React from "react";
import {
    useLocation,
    useNavigate ,
    useParams,
    Link
} from "react-router-dom";
import useFecth from "../customize/fecth";
import './post.scss'
const BlogItem = () => {
    let { id } = useParams();
    console.log('id', id);
    const {data, isLoading} = useFecth(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let navigate = useNavigate();
    const handleClickBack = () => {
        navigate('/blog');
    }
    return (
        <div className="blog-singer">
            {
                data &&
                <div className="blog-item">
                    <h3 className="blog-item-title">
                        Title: { isLoading === false ? data.title : 'Loading...'}
                        </h3>
                    <p className="blog-item-body">
                        Body: { isLoading === false ? data.body : 'Loading...'}
                        </p>
                    <button
                        className="blog-item-btn"
                        onClick={handleClickBack}
                    >
                        Back!
                    </button>
                </div>
            }
        </div>
    )
}

export default BlogItem;