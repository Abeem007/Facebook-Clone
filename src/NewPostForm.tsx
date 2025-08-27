import { useAuth } from "./auth/AuthContext";
import { useState } from "react";

import { db } from "./firebase";
import { addDoc,collection,serverTimestamp } from "firebase/firestore";
import { BiPhotoAlbum, BiSmile } from "react-icons/bi";

import { PiVideoCameraFill } from "react-icons/pi";



const NewPostForm: React.FC = () => {
  const { user } = useAuth();
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  if (!user) return null; // safety: should never render when logged‑out

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    try {
      await addDoc(collection(db, 'posts'), {
        body: text,
        tags:[],
        userId: user.uid,
        user:{
        firstName: user.displayName?.split(' ')[0] || '',
        lastName: user.displayName?.split(' ')[1] || '',
        image: user.photoURL || '',
      },
        createdAt: serverTimestamp(),
      });
    setText('');
  }finally {
    setLoading(false)
  }
    }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow mb-4"
    >
      <div className="flex gap-4 items-center mb-2 pb-3">
        <img
          src={user?.photoURL || "src/assets/Images/avatar-placeholder.jpg"}
          alt="Profile"
          className="rounded-full h-8 w-8 object-cover"
        />
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          className="outline-none bg-gray-100 w-full border- rounded-full p-2 mb-4  "
        />
        <button
          disabled={loading}
          className="bg-blue-600 text-white py-1 px-4 rounded-2xl disabled:opacity-50"
        >
          {loading ? "Posting…" : "Post"}
        </button>
      </div>
      <hr className="text-gray-300" />
      <div className="flex items-center justify-around pt-3 pb-1 px-1">
        <span className="flex gap-2 items-center">
          <PiVideoCameraFill className="text-red-500 h-6 w-6" />{" "}
          <p>Live video</p>
        </span>
        <span className="flex gap-2 items-center">
          <BiPhotoAlbum className="text-green-600 h-6 w-6" /> <p>Photo/video</p>
        </span>
        <span className="flex gap-2 items-center">
          <BiSmile className="text-orange-300 h-6 w-6" /> <p>Feeling/activity</p>
        </span>
      </div>
    </form>
  );
};

export default NewPostForm;
