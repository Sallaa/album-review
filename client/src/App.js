import React from "react";
import App from './components/App'

import {UserContextProvider} from './providers/UserProvider';

export default() => {
  return (
    <UserContextProvider>
      <App />
    </UserContextProvider>
  );
}