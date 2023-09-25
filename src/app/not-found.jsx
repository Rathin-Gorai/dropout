
import Link from "next/link";


const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
      <button className="bg-slate-950 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">Back to Homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;
