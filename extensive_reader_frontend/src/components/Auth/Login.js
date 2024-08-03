import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Login = ({ setType, closeModal }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error('Invalid email or password');
        throw new Error(data.message || 'Invalid email or password');
      }

      // Save the JWT token to local storage and cookies
      toast.success('Login Authenticated!');
      localStorage.setItem('authToken', data.token);
      Cookies.set('authToken', data.token, { expires: 1 }); // Expires in 1 day
      closeModal();

      // Reload the page to ensure cookies are sent in subsequent requests
      window.location.reload()
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-6 text-purple-600">Extensive Reading</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full py-2 mb-4 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
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
        Sign in with Google
      </button>
      <div className="flex justify-between">
        <div className="text-sm text-gray-500 hover:text-gray-700">Forgot Password</div>
        <div className="text-sm text-gray-500 hover:text-gray-700" onClick={() => setType(2)}>Create account</div>
      </div>
    </>
  );
};

export default Login;
