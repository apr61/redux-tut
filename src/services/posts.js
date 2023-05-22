import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../FirebaseConfig";

export const getAllPosts = async () => {
  let posts = [];
  const querySnapShot = await getDocs(collection(db, "posts"));
  querySnapShot.forEach((doc) => {
    posts.push({ id: doc.id, ...doc.data() });
  });
  return posts;
};

export const createNewPost = async (newPost) => {
  const docRef = await addDoc(collection(db, "posts"), newPost);
  return { id: docRef.id, ...newPost };
};

export const updateExistingPost = async (post) => {
  await updateDoc(doc(db, "posts", post.id), post);
  return post;
};

export const deletePostById = async (postId) => {
  await deleteDoc(doc(db, "posts", postId));
  return postId;
};
