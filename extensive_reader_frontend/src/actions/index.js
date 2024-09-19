'use client'; // Use 'client' for client-side functionality like login/sign-out

import { signIn, signOut } from "next-auth/react"; // Correct import

export async function doSocialLogin(formData) {
    const action = formData.get('action');
    await signIn(action, { callbackUrl: "/home" });
}

export async function doLogout() {
  await signOut({ callbackUrl: "/" });
}
