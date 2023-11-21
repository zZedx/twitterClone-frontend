import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className="hidden px-5 py-2 text-3xl rounded-full w-fit hover:bg-secondary sm:block">
      <Link to={'/'}>
      <img src="/logo-white.png" alt="" className="h-6"/>
      </Link>
      </div>
  )
}

export default Logo