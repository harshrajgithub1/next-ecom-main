
import { useState, useEffect } from 'react';
//import { useRouter } from 'next/router';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  //const router = useRouter();
  useEffect(() => {
    if (session) {
      setIsLoggedIn(true);
      //router.replace('/about');
    } else {
      setIsLoggedIn(false);
    }
    setIsLoading(false); 
  }, [session]); // Replace yourTokenCookieName with the name of your cookie

  const logout = () => {
    // Clear the authentication token from cookies
    sessionStorage.removeItem("token");

    // Update the isLoggedIn state to reflect that the user is logged out
    setIsLoggedIn(false);
  };
  return { isLoggedIn, logout };
};




