import React from 'react';

const PostItem = (props) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong> {props.number} {props.post.title}</strong>
                    <p>{props.post.body}</p>
                </div>
                <button className="btn">Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;