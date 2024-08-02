import React from 'react';

const Signup = ({setType}) => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Extensive Reading</h2>
        <h3 className="text-xl font-semibold mb-2">Let's create your account</h3>
        <p className="text-gray-500 mb-6">Signing up is fast and free.</p>
      </div>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Create a password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 mb-4 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          Create Account
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-4 text-center">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </p>
      <div className="flex justify-center mt-4">
        <span className="text-sm text-gray-500">Already have an account?</span>
        <div className="ml-1 text-sm text-purple-600 hover:underline" onClick={() => setType(1)}>Sign in</div>
      </div>
    </>
  );
};

export default Signup;
