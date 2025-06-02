import { useParams, useNavigate } from "react-router-dom"
import { usePostStore } from "../store/post.store"
import toast from "react-hot-toast"

const BlogDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getPost, deletePost } = usePostStore()
  const post = getPost(id!)

  const handleDelete = () => {
    deletePost(id!)
    toast.success("Post deleted!")
    navigate("/blog")
  }

  if (!post) return <p>Post not found.</p>

  return (
    <div>
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="italic mb-2">{post.content}</p>
      <p className="text-sm text-gray-600">Published: {post.published ? "Yes" : "No"}</p>

      <div className="flex gap-2 mt-3">
        <button onClick={() => navigate(`/blog/edit/${post.id}`)} className="border px-2 py-1">
          Edit
        </button>
        <button onClick={handleDelete} className="border px-2 py-1 text-red-600">
          Delete
        </button>
        <button onClick={() => navigate("/blog")} className="border px-2 py-1">
          Back
        </button>
      </div>
    </div>
  )
}

export default BlogDetail
