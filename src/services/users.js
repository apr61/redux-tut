import { collection, getDocs } from "firebase/firestore";
import { db } from '../FirebaseConfig'

export const getAllUsers = async () => {
    let users = []
    const querySnapShot = await getDocs(collection(db, "users"))
    querySnapShot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() })
    })
    return users
}