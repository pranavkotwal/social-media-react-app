import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { getPosts } from '../api';
import { Home } from '../pages';
import Loader from './Loader';
import Navbar from './Navbar';
import Login from '../pages/Login';

const About = () => {
  return <h1>About</h1>;
};
const UserInfo = () => {
  return <h1>User Info</h1>;
};
const Page404 = () => {
  return <h1>Nothing found</h1>;
};

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);
      if (response.success) {
        setPosts(response.data.posts);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route exact path="/" element={<Home posts={posts} />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/user/:asdfa" element={<UserInfo />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
