import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from 'react';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
  updateUser: (user: User) => void;
  disconnect: () => void;
};

type PayloadType = {
  type: string;
  payload: User;
};

const initialValue: UserContextType = {
  user: null,
  setUser: () => {},
  updateUser: () => {},
  disconnect: (): void => {
    throw new Error('Function not implemented.');
  },
};

const UserContext = createContext<UserContextType>(initialValue);

const userReducer = (
  state: UserContextType,
  action: PayloadType
): UserContextType => {
  switch (action.type) {
    case 'SET':
      return { ...state, user: { ...action.payload } };

    case 'UPDATE':
      return { ...state, user: { ...action.payload } };

    case 'DISCONNECT':
      return { ...state, user: null };

    default:
      return state;
  }
};

export const useUser = () => {
  const ctx = useContext<UserContextType>(UserContext);
  if (!UserContext) throw new Error('user context not implemented yet');
  return ctx;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialValue);

  const api = useMemo(
    () => ({
      setUser: (user: User) => {
        dispatch({ type: 'SET', payload: user });
      },
      updateUser: (user: User) => {
        dispatch({ type: 'UPDATE', payload: user });
      },
      disconnect: () => {
        // @ts-ignore
        dispatch({ type: 'DISCONNECT', payload: null });
      },
    }),
    []
  );

  return (
    <UserContext.Provider value={{ ...state, ...api }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserConsummer = UserContext.Consumer;
