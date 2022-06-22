import React from "react";

const Post = ({ props }) => {
    // const addPost = () => {};

    return (
        <>
            <p>
                <b>Post:</b> {props.post}
            </p>
            <button>Add post</button>
        </>
    );
};

export default Post;
