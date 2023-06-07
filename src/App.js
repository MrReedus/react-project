import React, {useState} from 'react'
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './scss/app.scss'
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Mybutton from "./components/UI/button/Mybutton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'аа', body: 'про'},
        {id: 2, title: 'яя', body: 'вил'},
        {id: 3, title: 'гг', body: 'хых3'}
    ])

    const [selectedSort, setSelectedSort] = useState('')

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    // Получаем post из дочернего компонента
    function removePost(post) {
        setPosts(posts.filter(item => item.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
       setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <div className="">
               <hr style={{margin: '15px 0'}} />
                <div className="">
                    <input type="text"/>
                    <MySelect
                        value={selectedSort}
                        onChange={sortPosts}
                        defaultValue='Сонртировка'
                        options={[
                            {value: 'title', name: 'По названию'},
                            {value: 'body', name: 'По описанию' }
                        ]}
                    />
                </div>

            </div>
            {posts.length !== 0
                ? <PostList posts={posts} title={"Посты про JS"} remove={removePost}/>
                : <h1 style={{textAlign: 'center'}}>Постов пока нет, добавьте первый.</h1>
            }

        </div>
    );
}

export default App;
