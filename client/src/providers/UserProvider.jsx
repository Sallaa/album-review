import React, {createContext, useState, useEffect} from "react";
import { auth } from "../firebase";

export const UserContext = createContext({user: null});

export const UserContextProvider = props => {
    const [user, setUser] = useState();

    useEffect(() => {
      auth.onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          setUser(user);
        } else {
          // No user is signed in.
          setUser(null);
        }
      });
    })

  return (
    <UserContext.Provider value={[user, setUser]}>
        {props.children}
    </UserContext.Provider>
  );
};