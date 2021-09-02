import { withRouter } from 'react-router-dom';

const SpecialButton = withRouter(({ history }) => {
  return (
    <div>
      <button
        onClick={() => {
          history.push('/posts/special');
        }}
      >
        Special Button
      </button>
    </div>
  );
});

export default SpecialButton;
