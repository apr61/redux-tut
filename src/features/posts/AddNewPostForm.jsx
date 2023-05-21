import { useState } from "react"
import { postAdded } from "./postsSlice"
import { useDispatch, useSelector } from "react-redux"
import { selectAllUsers } from "../users/usersSlice"

export const AddNewPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    const canSave = [title, content, userId].every(Boolean)

    const authorNames = users.map(user => (
        <option key={user.id} value={user.id}>{user.name}</option>
    ))

    function handleOnFormSubmit(e) {
        e.preventDefault()
        dispatch(
            postAdded( title, content, +userId)
        )
        setContent('')
        setTitle('')
        setUserId('')
    }

    return (
        <section className="my-4">
            <h2 className="my-2 text-2xl text-center">Add New Post</h2>
            <form className="flex flex-col gap-2" onSubmit={handleOnFormSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className="text-xl">Title</label>
                    <input type="text" id="title" name="title"
                        autoFocus={true}
                        className="p-2 border rounded-md focus:outline focus:outline-slate-600 text-lg"
                        value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="content" className="text-xl">Content</label>
                    <textarea type="text" id="content" name="content"
                        className="p-2 border rounded-md focus:outline focus:outline-slate-600 resize-none text-lg"
                        value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="content" className="text-xl">Author</label>
                    <select className="p-2 bg-white border rounded-md text-lg" value={userId} onChange={(e) => setUserId(e.target.value)}>
                        <option value=''>Select a author</option>
                        {authorNames}
                    </select>
                </div>
                <button
                    className="bg-emerald-500 text-white p-2 rounded-md text-lg font-medium disabled:opacity-50"
                    disabled={!canSave}
                >Add new post</button>
            </form>
        </section>
    )
}
