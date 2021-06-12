import { MoreVert } from "@material-ui/icons";
import "./post.css";
import { Users } from "../../dummydata";
import { useState } from "react";

export default function Post({ post }) {
  const user = Users.filter((u) => u.id === post?.userId)[0];
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={user?.profilePicture} alt="" />
            <span className="postUsername">{user?.username}</span>
            <span className="postdate">{post?.date}</span>
          </div>
          <div className="posttopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post?.photo} alt="" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="postLikeCounter">{like} like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
