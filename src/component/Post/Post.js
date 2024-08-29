import "./Post.css";
import { useState } from "react";

const Post = () => {
    const [post, setPost] = useState({
        title: "제목",
        content: "내용",
        author: "작성자",
        time: "시간"
    })

    return (
        <div>
            {post.title}{post.content}{post.author}{post.time}
        </div>
    )
}

export default Post;