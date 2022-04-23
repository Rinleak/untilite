import React, {useState} from 'react';
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import './style/App.css'
import Post from "./components/post";
import Postlist from "./components/Postlist";
import Button from "./components/UI/button/Button";
import MyInput from "./components/UI/input/myInput";
import PostForm from "./components/UI/PostForm";


function App() {
    const [posts,SetPosts]=useState( [
        {id:1,title :'Javascript',body:'Description'},
        {id:2,title :'Javascript 2',body:'Description'},
        {id:3,title :'Javascript 3',body:'Description'},
    ])



   const createPost=(newPost)=>{
SetPosts([...posts,newPost])

   }

const removePost=(post)=>{
 SetPosts(posts.filter(p=>p.id !==post.id))

}

    return (

        <div className="App">
           <PostForm create={createPost}/>
            <Postlist remove={removePost} posts={posts} title="Список постов"/>
        </div>
    );
}
export default App;
