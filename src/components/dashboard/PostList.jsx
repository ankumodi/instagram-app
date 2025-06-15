import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/actions/postActions";
import Post from "./Post";
import LoadingSpinner from "../common/LoadingSpinner";
import WelcomeMsg from "../common/Welcomemsg";

const PostList = () => {
  const dispatch = useDispatch();
  const { items: posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  console.log(posts);

  return (
    <>
      {posts.length === 0 && <WelcomeMsg></WelcomeMsg>}
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};
export default PostList;
