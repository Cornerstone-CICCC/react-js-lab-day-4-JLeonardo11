import { create } from "zustand"
import { v4 as uuid } from "uuid"

type Post = {
  id: string
  title: string
  content: string
  published: boolean
}

type State = {
  posts: Post[]
  addPost: (data: Omit<Post, "id">) => void
  deletePost: (id: string) => void
  updatePost: (id: string, data: Omit<Post, "id">) => void
  getPost: (id: string) => Post | undefined
}

export const usePostStore = create<State>((set, get) => ({
  posts: [],
  addPost: (data) =>
    set((state) => ({
      posts: [...state.posts, { ...data, id: uuid() }]
    })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((p) => p.id !== id)
    })),
  updatePost: (id, data) =>
    set((state) => ({
      posts: state.posts.map((p) => (p.id === id ? { ...p, ...data } : p))
    })),
  getPost: (id) => get().posts.find((p) => p.id === id)
}))
