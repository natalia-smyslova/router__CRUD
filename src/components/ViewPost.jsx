import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Button from "./Button";
import PostHeader from "./PostHeader";
import CloseButton from "./CloseButton";

function ViewPost() {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetch(import.meta.env.VITE_URL + `posts/${id}`)
        .then(res => res.json())
        .then(json => setPost(json.post));
    }, [id]);
  
    const onChangeHandler = (e) => {setPost(prev => {
      return { ...prev, content: e.target.value };
    })};
  
    const deletePost = () => {
      fetch(import.meta.env.VITE_URL + `posts/${post.id}`, { method: 'DELETE' })
      .then(() => navigate('/'));
    };
  
    const editPost = () => setIsEdit(true);
  
    const savePost = () => {
      const data = { content: post.content };
      fetch(import.meta.env.VITE_URL + `posts/${post.id}`, { method: 'PUT', body: JSON.stringify(data) })
        .then(() => navigate('/'));
    };
  
    const closePost = () => navigate(-1);
  
    const cancelEditing = () => setIsEdit(false);
  
    return isEdit ? (
      <div className="post">
        <PostHeader />
        <textarea className="post__content" value={post.content} onChange={onChangeHandler}></textarea>
        <div className="post__button-wrapper">
          <Button text="Сохранить" callback={savePost} />
        </div>
        <CloseButton callback={cancelEditing} />
      </div>
    ) : (
      <div className="post">
        <PostHeader />
        <div className="post__content">{post.content}</div>
        <span className="post__time">{moment(post.created).fromNow()}</span>
        <div className="post__button-wrapper flex-wrapper">
          <Button text="Редактировать" callback={editPost}/>
          <Button text="Удалить" callback={deletePost} color="red"/>
        </div>
        <CloseButton callback={closePost} />
      </div>
    );
  }

  export default ViewPost