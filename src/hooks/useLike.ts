// src/hooks/useLike.ts
import {
  collection,
  doc,
  deleteDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useAuth } from "../auth/AuthContext";

export const useLike = (postId: string) => {
  const { user } = useAuth();
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likesCol = collection(db, "posts", postId, "likes");
    // live count
    const unsub = onSnapshot(likesCol, (snap) => {
      setCount(snap.size);
      setLiked(!!snap.docs.find((d) => d.id === user?.uid));
    });
    return unsub;
  }, [postId, user]);

  const toggle = async () => {
    if (!user) return;
    const likeDoc = doc(db, "posts", postId, "likes", user.uid);
    liked ? await deleteDoc(likeDoc) : await setDoc(likeDoc, {});
  };

  return { count, liked, toggle };
};
