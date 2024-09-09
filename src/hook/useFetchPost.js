import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPost = () => {
    const [post, setPost] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("/api/fetch_post")
            .then((response) => {
                setPost(response.data);
            })
            .catch((err) => {
                setError(err);
            });
    }, []);

    return { post, error };
};

export default useFetchPost;
