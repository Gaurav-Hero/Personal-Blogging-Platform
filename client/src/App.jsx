import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import SinglePost from './pages/SinglePost';
import Navbar from './components/Navbar'
import EditPost from './pages/EditPage';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/post/:id' element={<SinglePost />}/>
        <Route path='/create' element={<CreatePost />}/>
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App
