import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw]">
        <h1 className="text-2xl font-bold text-center mb-4">Lest Connect</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="useranme"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="ritwik12"
              className="shadow-md rounded-md w-full
               px-3 py-2  border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="your@email.com"
              className="shadow-md rounded-md w-full
               px-3 py-2  border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="...."
              className="shadow-md rounded-md w-full
               px-3 py-2  border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="account type"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select your account
            </label>
            <select
              className="shadow-md rounded-md w-full
               px-3 py-2  border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <div className="flex items-center justify-end mb-4">
            <Link to="/login" className="text-xs text-black">
              Log In with account
            </Link>
          </div>
          <button type="submit" className="w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-black">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};
