import { useLike } from "../hooks/useLike";
import CommentButton from "./CommentButton";
import {  FaShare } from "react-icons/fa";
import { Timestamp } from "firebase/firestore";

import { FiThumbsUp } from "react-icons/fi";
interface PostWithUser {
  id: string;
  body: string;
  tags: string[];
  user?: { firstName: string; lastName: string; image: string };
  createdAt: Date | Timestamp;
}
const PostCard: React.FC<{ post: PostWithUser }> = ({ post }) => {
  const { count, liked, toggle } = useLike(post.id);
  const name =
    post.user?.firstName || post.user?.lastName
      ? `${post.user.firstName || ""} ${post.user.lastName || ""}`.trim()
      : "Anonymous";

  const avatar = post.user?.image || `https://i.pravatar.cc/100?u=${post.id}`;
  // Convert Firestore Timestamp to Date if necessary
  const createdAtDate =
    post.createdAt instanceof Timestamp
      ? post.createdAt.toDate()
      : post.createdAt instanceof Date
      ? post.createdAt
      : new Date();

  // Debug user data and timestamp
  // console.log("Post data:", {
  //   postId: post.id,
  //   user: post.user,
  //   name,
  //   createdAt: post.createdAt,
  //   formattedDate: createdAtDate,
  // });
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 max-w-xl mx-auto">
      {/* header */}
      <div className="flex items-center gap-3 mb-2">
        <img
          src={avatar}
          alt={`${name}'s profile`}
          className="w-10 h-10 rounded-full object-cover border border-gray-200 "
        />
        <div className="flex flex-col">
          <span className="font-medium text-gray-900 text-base">{name}</span>
          <span className="text-xs text-gray-500">
            {createdAtDate
              ? createdAtDate.toLocaleString("en-US", {
                  year:"numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "Unknown time"}
          </span>
        </div>
      </div>
      {/* body */}
      <p className="text-gray-800 text-sm mb-4 p-4">{post.body}</p>
      {/* tags */}
      <div className="flex flex-wrap gap-2 text-blue-600 text-sm">
        {post.tags.map((tag) => (
          <span
            className="text-blue-600 text-sm font-medium hover:underline cursor-pointer"
            key={tag}
          >
            #{tag}
          </span>
        ))}
      </div>
      {/* Like Count */}
      {count > 0 && (
        <div className="flex items-center gap-2 mb-3 text-sm pb-2 text-gray-600">
          <FiThumbsUp className="text-blue-600 " />
          <span>{count}</span>
        </div>
      )}
      {/* Divider */}
      <hr className="border-gray-200 mb-3" />
      {/* Action Buttons */}
      <div className="flex justify-around items-center">
        <button
          onClick={toggle}
          className={`flex items-center gap-2 text-sm font-medium  rounded-md hover:bg-gray-100 transition-colors ${
            liked ? "text-blue-600" : "text-gray-600"
          }`}
        >
          <FiThumbsUp className="text-lg" />
          Like
        </button>

        <CommentButton postId={post.id} />
        <button className="flex items-center gap-2 text-sm font-medium text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
          <FaShare className="text-lg" />
          Share
        </button>
      </div>
    </div>
  );
}
export default PostCard;