import { Routes, Route } from "react-router-dom"
import BlogList from "./pages/BlogList"
import BlogDetail from "./pages/BlogDetail"
import AddPost from "./pages/AddPost"
import EditPost from "./pages/EditPost"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
    <Header firstname= "Justin Perdomo"/>
    <main className="p-4 max-w mx-auto flex-1">
      <Routes>
        <Route path="/" element={<h1 className=" text h-[100vh] justify-center items-center flex text-3xl font-bold">Welcome Home</h1>} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/new" element={<AddPost />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/blog/edit/:id" element={<EditPost />} />
      </Routes>
    </main>
  <Footer />
</>
  )
}

export default App
