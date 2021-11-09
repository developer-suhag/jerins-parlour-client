import axios from "axios";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        saveUser(result?.user?.email, result?.user?.displayName);
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    //   const unsubscribe =
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  // save user to database
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios.put("http://localhost:5000/users", user).then((result) => {
      console.log(result);
      if (result.data?.upsertedCount > 0) {
        alert("saved user");
      }
    });
  };

  return {
    signInWithGoogle,
    logOut,
    user,
    isLoading,
  };
};

export default useFirebase;
