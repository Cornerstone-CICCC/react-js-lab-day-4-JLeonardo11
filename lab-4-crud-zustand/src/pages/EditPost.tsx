import { useState, useEffect, type FormEvent } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { usePostStore } from "../store/post.store"
import toast from "react-hot-toast"

const EditPost = () => {
  const { id } = useParams()
  const { getPost, updatePost } = usePostStore()
  const post = getPost(id!)
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [published, setPublished] = useState(true)

  useEffect(() => {
    if (post) {
      setTitle(post.title)
      setContent(post.content)
      setPublished(post.published)
    }
  }, [post])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    updatePost(id!, { title, content, published })
    toast.success("Post updated!")
    navigate("/blog")
  }

  if (!post) return <p>Post not found.</p>

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          className="border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2"
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
        <button className="border px-4 py-1 hover:bg-black hover:text-white">Save</button>
      </form>
    </div>
  )
}

export default EditPost
