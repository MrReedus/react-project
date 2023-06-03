import React, {useState} from 'react'
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './scss/app.scss'
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Mybutton from "./components/UI/button/Mybutton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Язык программирования 1'},
        {id: 2, title: 'Javascript 2', body: 'Язык программирования 2'},
        {id: 3, title: 'Javascript 3', body: 'Язык программирования 3'}
    ])

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    // Получаем post из дочернего компонента
    function removePost(post) {
        setPosts(posts.filter(item => item.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length !== 0
                ? <PostList posts={posts} title={"Посты про JS"} remove={removePost}/>
                : <h1 style={{textAlign: 'center'}}>Постов пока нет, добавьте первый.</h1>
            }

        </div>
    );
}

export default App;
