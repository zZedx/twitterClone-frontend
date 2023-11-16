import { Link } from "react-router-dom";

const ServerError = ({children}) => {
  return (
    <div className="flex items-center justify-center h-screen text-white bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl">{children}</p>
        <Link to="/" className="inline-block px-4 py-2 mt-4 text-white rounded-md bg-brand hover:bg-brand/90">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default ServerError