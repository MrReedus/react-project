import React from 'react';
import Mybutton from "./UI/button/Mybutton";

const PostItem = (props) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong> {props.number} {props.post.title}</strong>
                    <p>{props.post.body}</p>
                </div>
                <Mybutton onClick={() => props.remove(props.post)} className="btn">Удалить</Mybutton>
            </div>
        </div>
    );
};

export default PostItem;