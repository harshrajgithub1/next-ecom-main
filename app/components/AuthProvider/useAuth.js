// useAuth.js

import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

export const useAuth = () => {
  const [cookies] = useCookies(['token']); // Replace yourTokenCookieName with the name of your cookie
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cookies.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setIsLoading(false); 
  }, [cookies.token]); // Replace yourTokenCookieName with the name of your cookie

  const logout = () => {
    // Clear the authentication token from cookies
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Update the isLoggedIn state to reflect that the user is logged out
    setIsLoggedIn(false);
  };
  return { isLoggedIn, logout };
};
