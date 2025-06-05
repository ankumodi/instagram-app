import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Social-media-Store";
import WelcomeMsg from "./Welcomemsg";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.post);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      {!fetching && postList.length === 0 && <WelcomeMsg></WelcomeMsg>}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};
export default PostList;
