import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LockClosedIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import useLocalStorage from "../hooks/use-local-storage";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const [users, setUsers] = useLocalStorage("userData", {
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!users.email || !users.password) {
      setError("Please enter both email and password");
      setIsLoading(false);
      return;
    }

    if (users.email !== "admin@gmail.com" || users.password !== "s123456") {
      setError("Invalid email or password");
      setIsLoading(false);
      return;
    }

    try {
      await login(users).then((response) => {
        if (response) {
          navigate("/dashboard");
        } else {
          setError("Login failed. Please try again.");
        }
      });
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-between bg-gray-50 flex-col md:flex-row py-14 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md md:mt-14">
        <h2 className="mt-6 text-center md:text-4xl text-3xl font-medium text-black">
          Sign in to your account
        </h2>
        <div className="mt-4 text-center text-sm md:w-full w-1/2 mx-auto">
          <img src="/public/logo@2x.png" alt="company logo" />
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-14">
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={users.email}
                  onChange={handleInputChange}
                  className="py-2 pl-10 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockClosedIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={users.password}
                  onChange={handleInputChange}
                  className="py-2 pl-10 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-lime-600 hover:text-lime-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="p-2 text-center text-sm bg-gray-400 opacity-40 rounded-2xl  mx-auto">
              <p className="">
                <b className="text-lg">To test please use:</b>
              </p>
              <p className="text-md ">
                Email: <b>admin@gmail.com</b>
              </p>
              <p className="text-md">
                Password: <b>s123456</b>
              </p>
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
