import React from 'react';

const Signup = ({setType}) => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Extensive Reading</h2>
        <h3 className="text-xl font-semibold mb-2">Let's create your account</h3>
        <p className="text-gray-500 mb-6">Signing up is fast and free.</p>
      </div>
      <div className="mb-4">
        <div
          onClick={() => setType(3)}
          className="w-full py-2 mb-4 text-white bg-gray-800 rounded-md flex items-center justify-center hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7.12-3.86-7.62-7.81H5.1v-1.1H3.38C3.88 7.87 7.05 4.5 11 4.07v2.02h1V4.07c3.95.49 7.12 3.86 7.62 7.81H18.9v1.1h1.72c-.5 3.95-3.67 7.32-7.62 7.81V18.9h-1v1.03z" />
          </svg>
          Signup with Email
        </div>
      </div>
      <div className="flex items-center justify-center mb-4">
        <span className="text-gray-500">OR</span>
      </div>
      <button
        type="button"
        className="w-full py-2 mb-4 text-white bg-blue-500 rounded-md flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.35 11.1H12v2.8h5.35c-.7 2-2.55 3.6-5.35 3.6-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6c1.5 0 2.8.55 3.8 1.45L18 4.9C16.45 3.55 14.35 2.8 12 2.8 6.5 2.8 2 7.3 2 12.8s4.5 10 10 10c5.5 0 10-4.5 10-10 0-.7-.1-1.3-.15-1.9z" />
          </svg>
          Signup with Google
      </button>
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
