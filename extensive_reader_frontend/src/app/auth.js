import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Cookies from 'js-cookie';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      try {
        // Send the session user info to your backend to get a JWT
        const response = await fetch('http://localhost:3000/api/google-auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: session.user.name,
            email: session.user.email,
            auth_provider: 'google',
          }),
        });

        const data = await response.json();
        console.log("datadatadatadatadatadatadata", data)
        if (response.ok) {
          // Store the JWT in session
          session.jwt = data.token;
        } else {
          console.error('Failed to save user or generate token');
        }
      } catch (error) {
        console.error('Error fetching JWT from backend:', error);
      }

      return session;
    },

    async jwt({ token, user, account, profile, isNewUser }) {
      // Optional: Modify the JWT token here if needed
      return token;
    },
  },
};

export default NextAuth(authOptions);
