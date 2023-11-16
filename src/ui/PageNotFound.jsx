import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen text-white bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl">Page Not Found</p>
        <p className="mt-4 text-gray-500">
          The page you are looking for might be under construction.
        </p>
        <Link to="/" className="inline-block px-4 py-2 mt-8 text-white rounded-md bg-brand hover:bg-brand/90">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
