import { Link } from 'react-router-dom';
import SpecialButton from './SpecialButton';

const Home = ({ history, location, match }) => {
  console.log(history, location, match);

  return (
    <div>
      <p>Home</p>
      <Link to="/posts">Go to posts</Link>
      <Link to={`/posts/1`}>Go to post 1</Link>
      <button
        onClick={() => {
          history.push('/posts');
        }}
      >
        Click button to fo to posts
      </button>
      <SpecialButton />
    </div>
  );
};

export default Home;
