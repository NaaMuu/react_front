import "./Main_List.css";
import { useNavigate } from 'react-router-dom';
import useFetchPost from "../../hook/useFetchPost.js";

const Main_List = () => {
    const { post } = useFetchPost([]);

    const navigate = useNavigate();
    const handleClick = (num) => {
        navigate(`/post/${num}`);
    };

    return (
        <div className="main_list_div">
            {post.length > 0 ? (
                post.map(p => (
                    <form className="main_list_form" key={p.num} onClick={() => handleClick(p.num)}>
                        <p>{p.title}</p>
                        <p>{p.content}</p>
                    </form>
                ))
            ) : (
                <p>데이터가 없습니다.</p>
            )}
        </div>
    )
}

export default Main_List;
