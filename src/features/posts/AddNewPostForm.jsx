import { useState } from "react"

export const AddNewPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const canSave = [title, content].every(Boolean)

    function handleOnFormSubmit(e) {
        e.preventDefault()
        console.log({ title, content })
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
                <button
                    className="bg-emerald-500 text-white p-2 rounded-md text-lg font-medium disabled:opacity-50"
                    disabled={!canSave}
                >Add new post</button>
            </form>
        </section>
    )
}
