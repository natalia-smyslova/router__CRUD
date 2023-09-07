import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../PostContext";
import Button from "./Button";
import PostHeader from "./PostHeader";
import CloseButton from "./CloseButton";

export default function NewPost() {
  const { newPostText, setNewPostText } = useContext(PostContext);
  const navigate = useNavigate();

  const addPost = () => {
    const data = { content: newPostText };
    fetch(import.meta.env.VITE_URL + 'posts', { method: 'POST', body: JSON.stringify(data)})
      .then(() => {
        setNewPostText('');
        navigate('/');
      });
  };

  const cancelPost = () => {
    setNewPostText('');
    navigate('/');
  };

  return (
    <div className="post">
      <PostHeader />
      <div className="post__content">{newPostText}</div>
      <div className="post__button-wrapper">
        <Button text="Опубликовать" callback={addPost} />
      </div>
      <CloseButton callback={cancelPost} />
    </div>
  );
}