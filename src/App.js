import React, {useState} from 'react'
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './scss/app.scss'
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Mybutton from "./components/UI/button/Mybutton";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Язык программирования 1'},
        {id: 2, title: 'Javascript 2', body: 'Язык программирования 2'},
        {id: 3, title: 'Javascript 3', body: 'Язык программирования 3'}
    ])


    const [post, setPost] = useState({
        title: '',
        body: '',
    })

    const addNewPost = (e) => {
        e.preventDefault()

        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }

    return (
        <div className="App">
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
            <PostList posts={posts} title={"Посты про JS"}/>
        </div>
    );
}

export default App;
