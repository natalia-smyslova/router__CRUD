import Post from "./Post";

function Posts({ list }) {
    return <div className="posts">
        {list.map(p => <Post post={p} key={p.id} />)}
    </div>;
}
export default Posts