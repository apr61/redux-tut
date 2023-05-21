import { addDoc, collection, getDocs } from "firebase/firestore";
import {db} from '../FirebaseConfig'

export const getAllPosts = async () => {
    let posts = []
    const querySnapShot = await getDocs(collection(db, "posts"))
    querySnapShot.forEach((doc) => {
        posts.push({id: doc.id, ...doc.data()})
    })
    return posts
}

export const createNewPost = async (newPost) => {
    const docRef = await addDoc(collection(db, "posts"), newPost)
    return {id: docRef.id, ...newPost}
}