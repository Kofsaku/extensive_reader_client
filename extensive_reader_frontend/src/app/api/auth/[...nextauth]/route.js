import NextAuth from "next-auth";
import { authOptions } from "../../../../app/auth"; // Assuming you've defined authOptions in the correct path

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
