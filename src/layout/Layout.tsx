import SideNav from "../components/SideNav";
import { useAuth } from "../context/AuthContext";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const { isAuthenticated } = useAuth();
  return (
    <div className={`flex h-screen ${isAuthenticated ? "" : "flex-col"}`}>
      {isAuthenticated && <SideNav />}

      <main
        className={`
        ${isAuthenticated ? "flex-1 overflow-auto md:ml-64" : "w-full"}
        transition-all duration-300
      `}
      >
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
