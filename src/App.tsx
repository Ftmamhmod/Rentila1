import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./services/ProtectedRoute";
import Properties from "./pages/properites/Properties";
import Tenants from "./pages/tenants/Tenants";
import Login from "./pages/Login";
import SinglePropertyPage from "./pages/properites/SinglePropertyPage";
import TenantsDetils from "./pages/tenants/TenantsDetilsPage";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/properties"
                element={
                  <ProtectedRoute>
                    <Properties />
                  </ProtectedRoute>
                }
              />
              <Route
                path="properties/:id"
                element={
                  <ProtectedRoute>
                    <SinglePropertyPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/tenants"
                element={
                  <ProtectedRoute>
                    <Tenants />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/tenants/:id"
                element={
                  <ProtectedRoute>
                    <TenantsDetils />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
