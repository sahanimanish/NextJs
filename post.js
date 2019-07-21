import axios from 'axios';

const Post = ({ data }) => {
  return (
    <ul>
      {data.map(com => (
        <li>{com.name}</li>
      ))}
    </ul>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const { data } = res;
  return { data };
};

export default Post;
