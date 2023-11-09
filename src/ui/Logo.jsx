import { HiXMark } from "react-icons/hi2"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className="px-4 py-2 text-3xl rounded-full w-fit hover:bg-secondary">
      <Link to={'/'}>
      <HiXMark/>
      </Link>
      </div>
  )
}

export default Logo