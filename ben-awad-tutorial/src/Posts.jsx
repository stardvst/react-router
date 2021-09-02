import { useEffect } from 'react';

const Posts = ({ match }) => {
  useEffect(() => {
    fetch(`api.example.com/posts/${match.params.id}`);
  }, [match.params.id]);

  return <div>Post {match.params.id}</div>;
};

export default Posts;
