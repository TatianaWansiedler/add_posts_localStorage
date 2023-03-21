import { Route, Routes } from 'react-router-dom';
import AddPostPage from '../../pages/AddPostPage';
import AllPostsPage from '../../pages/AllPostsPage';
import Header from '../Header';
import './style.css';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<AllPostsPage/>}/>
        <Route path='/add_post' element={<AddPostPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
