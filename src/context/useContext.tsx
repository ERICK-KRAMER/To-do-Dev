/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

interface AuthContextType {
  isAuthenticated: boolean;
  register: ({ name, genre }: UserProps) => void;
}

interface UserProps {
  name: string;
  genre: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const register = ({name, genre}: UserProps) => {
    sessionStorage.setItem('user-token', uuidv4());
    sessionStorage.setItem('user-name', name);
    sessionStorage.setItem('user-genre', genre);
    setIsAuthenticated(true);
    console.log("register", isAuthenticated);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier context usage
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
