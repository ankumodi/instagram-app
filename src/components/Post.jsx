import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Social-media-Store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="bd-example m-0 border-0">
      <div className="card post" style={{ width: "48rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-success tag">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reaction" role="alert">
            {post.reactions.likes} likes {post.reactions.dislikes} dislikes
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
