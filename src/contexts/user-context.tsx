import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { createUserDocumentFromAuth, onAuthStateChangeListener } from '../services/firebase/firebase-utils';

type UserContextType = {
  currentUser: null | User;
  setCurrentUser: React.Dispatch<React.SetStateAction<null | User>>;
};

const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<null | User>(null);

  const value = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener(async user => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const value = useContext(UserContext);

  return value;
};

