import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { AuthContextType, UserType } from "../types/types";
import Loading from "../components/Loading";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const ADMIN_USER = {
    email: "admin@gmail.com",
    password: "s123456",
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  const login = async (user: UserType): Promise<boolean> => {
    const { email, password } = user;

    if (email === ADMIN_USER.email && password === ADMIN_USER.password) {
      const fakeToken = btoa(`${email}:${Date.now()}`);
      localStorage.setItem("authToken", fakeToken);
      setToken(fakeToken);

      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  const isAuthenticated = !!token;

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
