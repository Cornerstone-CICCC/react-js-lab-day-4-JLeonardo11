import { Routes, Route } from "react-router-dom"
import BlogList from "./pages/BlogList"


const App = () => {
  return (
    <main className="p-4 max-w-2xl mx-auto">
      <Routes>
        <Route path="/" element={<h1 className="text-3xl font-bold">Welcome Home</h1>} />
        <Route path="/blog" element={<BlogList />} />

      </Routes>
    </main>
  )
}

export default App
