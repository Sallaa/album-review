import React, {createContext, useState, useLayoutEffect} from "react";
import { auth } from "../firebase";

export const UserContext = createContext({user: null});

export const UserContextProvider = props => {
    const [user, setUser] = useState();

    useLayoutEffect(() => {
      auth.onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          setUser(user);
        } else {
          // No user is signed in.
          setUser(null);
        }
      });
    }, [])

  return (
    <UserContext.Provider value={[user, setUser]}>
        {props.children}
    </UserContext.Provider>
  );
};