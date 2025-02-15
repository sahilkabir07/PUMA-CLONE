import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./FireBase";
import { toast } from "react-toastify";

export const signUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    toast.success("Signup successful! 🤗🎉");
  } catch (error) {
    toast.error(`Signup failed: ${error.message}`);
  }
};

export const login = async (email, password) => {
  console.log("Raw Inputs - Email:", email, "Password:", password);

  if (!email || !password) {
    toast.error("Please enter both email and password!");
    return;
  }
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    toast.success(`Welcome back, ${userCredential.user.email}! 🚀`);
  } catch (error) {
    console.error("Firebase Login Error:", error.code, error.message);
    toast.error(`Login failed: ${error.message}`);
  }
};






export const logout = async () => {
  try {
    await signOut(auth);
    toast.info("Logged out successfully!");
  } catch (error) {
    toast.error(`Logout failed: ${error.message}`);
  }
};
