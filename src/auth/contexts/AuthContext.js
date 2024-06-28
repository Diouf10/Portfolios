/* eslint linebreak-style: ["error", "windows"]*/

import {createContext, useState} from 'react';

export const AuthContext = createContext();

/**
 * Fournisseur du contexte d'authentification
 * @param {jsx} {children}
 * @return {jsx}
 */
export default function AuthContextProvider({children}) {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      {children}
    </AuthContext.Provider>
  );
}
