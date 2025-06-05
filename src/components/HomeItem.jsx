const HomeItem = ({ post }) => {
  return (
    <div className="ui centered grid">
      <div className="eight wide column">
        <div className="ui fluid card">
          <div className="content centered">
            <div className="header">{post.user_id}</div>
          </div>
          <div className="content">
            <h4 className="ui sub header">{post.title}</h4>
            <div className="ui small feed">
              <div className="event">
                <div className="content">
                  <div className="summary">{post.body}</div>
                </div>
              </div>
              <div className="event">
                <div className="content">
                  <div className="summary">{post.tags}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="extra content">
            <span class="left floated mr-2">
              <i class="thumbs up blue icon"></i>
              {post.likes}
            </span>
            <span class="left floated">
              <i class="thumbs down blue icon"></i>
              {post.dislikes}
            </span>
            <span class="right floated">
              <i class="eye blue icon"></i>
              {post.views}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeItem;
