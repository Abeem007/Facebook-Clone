import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import PostCard from "./PostCard";
import NewPostForm from "../NewPostForm";

export interface PostWithUser {
  id: string; // Firestore doc id
  body: string;
  userId: string;
  tags: string[];
  user: {
    firstName: string;
    lastName: string;
    image: string;
  };
  createdAt: Date;
}

const Feed: React.FC = () => {
    const [posts, setPosts] = useState<PostWithUser[]>([]);
    const [loading, setLoading] = useState(true);

  
      useEffect(() => {
       
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
        const unsub = onSnapshot(q, (snap) => {
          const fetchedPosts = snap.docs.map(
            (d) => ({ id: d.id, ...d.data() } as PostWithUser)
          );
          // console.log("Fetched posts:", fetchedPosts); // Debug Firestore data
            setPosts(fetchedPosts);
          setLoading(false);
        },
          (error) => {
            console.error("Error fetching posts:", error); // Debug errors
            setLoading(false);
          }
        );

        return unsub; // unsubscribe on unmount
      }, []);
    if (loading) return <p className="text-center py-6">Loading feed…</p>;

    return (
        <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-8">
           
            <NewPostForm />
        {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available</p>
      ) : (
          posts.map((p) => (
                <PostCard key={p.id} post={p} />)
            ))}
        </div>
    );
};
export default Feed;