import { useState, type FormEvent } from "react"
import { usePostStore } from "../store/post.store"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const AddPost = () => {
  const { addPost } = usePostStore()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [published, setPublished] = useState(true)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    addPost({ title, content, published })
    toast.success("Post created!")
    navigate("/blog")
  }

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          className="border p-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <label className="text-sm">
          <input
            type="checkbox"
            checked={published}
            onChange={() => setPublished((p) => !p)}
          />{" "}
          Published
        </label>
        <button className="border px-4 py-1 hover:bg-black hover:text-white">Submit</button>
      </form>
    </div>
  )
}

export default AddPost
