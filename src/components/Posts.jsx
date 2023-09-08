import Post from "./Post";
import PropTypes from 'prop-types';

function Posts({ list }) {
    return <div className="posts">
        {list.map(p => <Post post={p} key={p.id} />)}
    </div>;
}

Posts.propTypes = {
    list: PropTypes.array,
    map: PropTypes.func,
}

export default Posts