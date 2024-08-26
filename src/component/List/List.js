import { useState } from "react";
import "./List.css";
const List = () => {
    const [post, setPost] = useState({
        title: "제목",
        content: "내용",
        author: "작성자",
        time: "시간"
    })
    return (
        <form className="List_form">
            <div>
                {post.title}
            </div>
        </form>
    )
}

export default List;
