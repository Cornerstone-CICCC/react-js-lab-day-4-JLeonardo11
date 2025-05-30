import { usePostStore } from "../store/post.store"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const BlogList = () => {
  const { posts, deletePost } = usePostStore()
  const navigate = useNavigate()

  const handleDelete = (id: string) => {
    deletePost(id)
    toast.success("Post deleted!")
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">Blog Posts</h2>
      <button
        onClick={() => navigate("/blog/new")}
        className="border px-3 py-1 mt-2 hover:bg-black hover:text-white"
      >
        Add New Post
      </button>
      <ul className="mt-4 space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="border p-3">
            <div className="font-semibold">{post.title}</div>
            <p className="text-sm italic">{post.published ? "Published" : "Draft"}</p>
            <div className="space-x-2 mt-2">
              <Link to={`/blog/${post.id}`} className="underline text-blue-600">View</Link>
              <button onClick={() => handleDelete(post.id)} className="text-red-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogList
