import "./List.css";
import { useNavigate } from 'react-router-dom';
import Post from "../Post/Post.js";

const List = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/post`);
    };

    return (
        <form className="List_form" onClick={handleClick}>
            <Post/>
        </form>
    )
}

export default List;
