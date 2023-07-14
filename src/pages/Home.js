import styles from '../styles/home.module.css';

// import { getPosts } from '../api';
import { CreatePost, FriendsList, Loader } from '../components';
import { Link } from 'react-router-dom';
import { useAuth, usePosts } from '../hooks';
import Post from '../components/Post';

const Home = () => {
  const auth = useAuth();
  console.log(auth.user);
  const posts = usePosts();
  console.log(posts);

  if (posts.loading) {
    return <Loader />;
  }

  return (
    <div className={styles.home}>
      <div className={styles.postsList}>
        <CreatePost />
        {posts.data.map((post) => (
          <Post post={post} key={`post-${post._id}`} />
        ))}
      </div>
      {auth.user && <FriendsList />}
    </div>
  );
};

export default Home;
