import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext({});

type propInput = {
  children: JSX.Element;
};

const AuthContextProvider = ({children}: propInput) => {
  const [authUser, setAuthUser] = useState(null);

  return (
    <AuthContext.Provider value={{authUser, setAuthUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
