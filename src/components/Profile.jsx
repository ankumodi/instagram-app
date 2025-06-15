import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WelcomeMsg from "./common/Welcomemsg";
import LoadingSpinner from "./common/LoadingSpinner";
import { userPosts } from "../store/actions/postActions";
import UserPost from "./dashboard/UserPost";
import UserCard from "./dashboard/UserCard";

const Profile = () => {
  const user =
    useSelector((state) => state.auth.user) ||
    JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const {
    items: userdata,
    loading,
    error,
  } = useSelector((state) => state.posts);

  useEffect(() => {
    console.log("dispatch user post");
    dispatch(userPosts(user.id));
  }, [dispatch]);

  console.log(userdata);
  console.log(userdata.posts);
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  const username = userdata?.username || "";
  return (
    <>
      <UserCard username={username}></UserCard>
      {userdata.length === 0 && <WelcomeMsg></WelcomeMsg>}
      {userdata?.posts?.map((post) => (
        <UserPost key={post.id} post={post}></UserPost>
      ))}
    </>
  );
};
export default Profile;
