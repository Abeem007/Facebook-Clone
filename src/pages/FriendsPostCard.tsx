import React from "react";
interface Friend {
  id: string;
  name: String;
  avatar: string;
  mutualFriends: number;
}
interface FriendsPostCardProps {
  friend: Friend;
  onConfirm: (id: string) => void;
  onDelete: (id: string) => void;
}
const FriendsPostCard: React.FC<FriendsPostCardProps> = ({
  friend,
  onConfirm,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-sm hover:shadow-lg transition-shadow duration-200 ">
      
      <div className="flex flex-col items-center  ">
        <img
          src={friend.avatar}
          alt={`${friend.name}'s profile`}
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 mb-3"
        />
        <h2 className="text-lg font-semibold text-gray-900">{friend.name}</h2>
        <p className="text-sm text-gray-500 mb-4 pb-2">
          {friend.mutualFriends} mutual friend
          {friend.mutualFriends !== 1 ? "s" : ""}
        </p>
        <div className="flex flex-col space-x-2 gap-3  w-full">
          <button
            onClick={() => onConfirm(friend.id)}
            className="flex-1 bg-blue-600 text-white py-2  rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
          >
            Confirm
          </button>
          <button
            onClick={() => onDelete(friend.id)}
            className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendsPostCard;
