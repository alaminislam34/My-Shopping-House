/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in
  const LogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logOut = async () => {
    setLoading(true);
    await axios.get("https://edu-connect-server-ebon.vercel.app/logout");
    localStorage.removeItem("jwtToken"); // Remove JWT token on logout
    return signOut(auth);
  };

  // Update profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Auth state observer with JWT handling from localStorage

  useEffect(() => {
    const token = localStorage.getItem("jwtToken"); // Retrieve JWT token from localStorage

    // Set the Authorization header globally for Axios
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    // Monitor auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        const user = { email: currentUser.email };

        // Fetch JWT token from the backend
        //   try {
        //     const res = await axios.post(
        //       `${import.meta.env.VITE_API_URL}/jwt`,
        //       user
        //     );

        //     if (res.data.success) {
        //       const { token } = res.data;

        //       // Store token in localStorage
        //       localStorage.setItem("jwtToken", token);

        //       // Update the Axios global Authorization header
        //       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        //     }
        //   } catch (error) {
        //     console.error(
        //       "Error fetching JWT token:",
        //       error.response?.data || error.message
        //     );
        //   } finally {
        //     setLoading(false);
        //   }
        // } else {
        console.log(currentUser);
        console.log("No authenticated user detected.");
        setLoading(false);
      }
    });

    // Cleanup function
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    LogIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
