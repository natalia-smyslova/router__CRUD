import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Page404 from './components/Page404';
import Main from './components/Main';
import { PostContext } from './PostContext';
import NewPost from './components/NewPost';
import ViewPost from './components/ViewPost';

function App() {
  const [newPostText, setNewPostText] = useState('');

  return (
    <BrowserRouter>
    <PostContext.Provider value={{ newPostText, setNewPostText }}>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/posts/new" element={<NewPost />}/>
          <Route path="/posts/:id" element={<ViewPost />}/>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
      </PostContext.Provider>
      </BrowserRouter>
  )
}

export default App
