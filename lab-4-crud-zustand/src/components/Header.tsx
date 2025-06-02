import { memo } from "react"
import { Link } from "react-router-dom"

type HeaderProps = {
  firstname: string
}

const Header = ({ firstname }: HeaderProps) => {
  return (
    <header className="border-b p-4 flex justify-between">
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <span className="text-sm italic">{firstname}</span>
    </header>
  )
}

export default memo(Header)
