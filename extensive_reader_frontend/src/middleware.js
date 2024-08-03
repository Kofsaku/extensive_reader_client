// middleware/authMiddleware.js
import { NextResponse } from 'next/server';
import { parse } from 'cookie';
import { toast } from 'react-toastify';

export function middleware(req) {
  const url = req.nextUrl.clone();
  const cookies = req.headers.get('cookie') ? parse(req.headers.get('cookie')) : {};
  const token = cookies.authToken;

  console.log("Middleware executed with URL:", url.toString());
  console.log("Auth token from cookies:", token);

  try {
    if (!token && url.pathname !== '/') {
      toast.error("User is not authenticated!")
      console.log("User is not authenticated, redirecting to home.");
      url.pathname = '/';
      return NextResponse.redirect(url);
    }

    console.log("User is authenticated, proceeding.");
    return NextResponse.next();
  } catch (error) {
    console.error("Error in middleware:", error);
    // Handle the error, maybe redirect to an error page or return a response
    url.pathname = '/error';
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ['/home'],
};
