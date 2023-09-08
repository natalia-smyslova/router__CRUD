import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import PostHeader from "./PostHeader";
import PropTypes from 'prop-types';

function Post({ post }) {
  const navigate = useNavigate();

  return (
    <div className="post posts-item" onClick={() => navigate(`/posts/${post.id}`)}>
      <PostHeader />
      <div className="post__content">{post.content}</div>
      <span className="post__time">{moment(post.created).fromNow()}</span>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  id: PropTypes.string,
  content: PropTypes.string,
  created: PropTypes.string,
}

export default Post