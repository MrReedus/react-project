import React, {useMemo,useState} from 'react'
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
    const [searchQuery, setSearchQuery] = useState('')




    const sortedPost = useMemo(() => {
        console.log('Отработала функция сортировки')
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])

// Поиск постов
    const sortedAndSearchedPOsts = useMemo( () => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

    }, [searchQuery, sortedPost])

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    // Получаем post из дочернего компонента
    function removePost(post) {
        setPosts(posts.filter(item => item.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <div className="">
                <hr style={{margin: '15px 0'}}/>
                <div className="">
                    <input
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        type="text" placeholder='Поиск..'/>
                    <MySelect
                        value={selectedSort}
                        onChange={sortPosts}
                        defaultValue='Сонртировка'
                        options={[
                            {value: 'title', name: 'По названию'},
                            {value: 'body', name: 'По описанию'}
                        ]}
                    />
                </div>

            </div>
            {sortedAndSearchedPOsts.length !== 0
                ? <PostList posts={sortedAndSearchedPOsts} title={"Посты про JS"} remove={removePost}/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
            }

        </div>
    );
}

export default App;
