import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../store/actions/postActions";
import { resetCreated } from "../../store/slices/postSlice";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { creating, createError, created } = useSelector(
    (state) => state.posts
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(
      createPost({
        title,
        body,
        tags,
        likes: 0,
        dislikes: 0,
        views: 0,
      })
    );

    console.log(response);
  };
  
  useEffect(() => {
    if (created) {
      dispatch(resetCreated());
      navigate("/");
    }
  }, [created, navigate]);
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 bg-light">
      <div className="card p-4 shadow" style={{ minWidth: "500px" }}>
        <h3>Create New Post</h3>
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Content
            </label>
            <textarea
              id="body"
              className="form-control"
              rows="5"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Hashtags
            </label>
            <textarea
              id="tags"
              className="form-control"
              rows="2"
              value={tags.join(",")}
              onChange={(e) =>
                setTags(e.target.value.split(",").map((tag) => tag.trim()))
              }
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {creating ? "Posting..." : "Create Post"}
          </button>
          {createError && <p style={{ color: "red" }}>{createError}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
