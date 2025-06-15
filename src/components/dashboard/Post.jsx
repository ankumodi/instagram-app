import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoMdEye } from "react-icons/io";
const Post = ({ post }) => {
  return (
    <div className="card p-4 shadow text-center mt-3 ">
      <div className="card-header">{post.user.username}</div>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge rounded-pill text-bg-secondary me-1">
            {tag.name}
          </span>
        ))}
      </div>
      <div className="card-footer text-body-secondary">
        <span className="me-3">
          <AiFillLike className="me-1" />
          {post.likes}
        </span>
        <span className="me-3">
          <AiFillDislike className="me-1" />
          {post.dislikes}
        </span>
        <span>
          <IoMdEye className="me-1" />
          {post.views}
        </span>
      </div>
    </div>
  );
};
export default Post;
