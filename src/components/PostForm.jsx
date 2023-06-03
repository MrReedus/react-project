import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import Mybutton from "./UI/button/Mybutton";

const PostForm = ({create}) => {



    const [post, setPost] = useState({title: '', body: '',})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form action="">
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="название поста"/>
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="описание поста"/>
            <Mybutton onClick={addNewPost}>Отправить пост</Mybutton>
        </form>
    );
};

export default PostForm;