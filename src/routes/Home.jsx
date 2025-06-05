import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const posts = useSelector((store) => store.posts);
  return (
    <main>
      <div className="items-container">
        {posts.map((post) => (
          <HomeItem key={post.id} post={post}></HomeItem>
        ))}
      </div>
    </main>
  );
};
export default Home;
