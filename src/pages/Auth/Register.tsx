
const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[380px]">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">First Name</label>
            <input type="text" placeholder="Enter first name"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-indigo-500"/>
          </div>
          <div>
            <label className="text-sm text-gray-600">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-0 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-0 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-0 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg 
            hover:bg-indigo-700 transition font-medium"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <span className="text-indigo-600 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  )
}

export default Register