import  { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../auth/AuthContext";


const Comments: React.FC<{ postId: string }> = ({ postId }) => {
    const { user } = useAuth();
    const [text, setText] = useState('');
    const [comments, setComments] = useState<any[]>([]);

    useEffect(() => {
        const q = query(collection(db, 'posts', postId, 'comments'), orderBy('createdAt', 'asc'));
        return onSnapshot(q, snap => setComments(snap.docs.map(d => ({ id: d.id, ...d.data() }))));

    }, [postId])
    
 const send = async (e: React.FormEvent) => {
   e.preventDefault();
   if (!user || !text.trim()) return;
   await addDoc(collection(db, "posts", postId, "comments"), {
     body: text,
     userId: user.uid,
     user: {
       firstName: user.displayName?.split(" ")[0] || "",
       image: user.photoURL || "",
     },
     createdAt: serverTimestamp(),
   });
   setText("");
 };
    
  return (
    <div className="mt-2">
      {comments.map((c) => (
        <div key={c.id} className="flex items-start  gap-2 py-3 mb-1">
          <img src={c.user.image} className="w-8 h-8 rounded-full" />
          <div className="bg-gray-100 rounded-xl px-4 py-1 text-sm">
            <p className="font-medium">{c.user.firstName}</p>
            <p className="font-light">{c.body}</p>
          </div>
        </div>
      ))}

      {user && (
        <form onSubmit={send} className="flex gap-2 mt-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1  rounded-full px-4 py-3 text-sm bg-gray-100"
            placeholder="Write a comment…"
          />
          <button className="text-blue-600 text-sm">Send</button>
        </form>
      )}
    </div>
  );
}

export default Comments