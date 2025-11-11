import React, { useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChatBox from "./components/Chatbox";
import SubscriptionPage from "./components/SubscriptionPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import AboutPage from "./components/AboutPage";

const App: React.FC = () => {
  const handleLoginSuccess = useCallback(() => {
    console.log("Login successful");
  }, []);

  const handleRegisterSuccess = useCallback(() => {
    console.log("Registration successful");
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="glass border-b border-white/20 p-4 shadow-lg backdrop-blur-xl">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="text-2xl font-bold font-display bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🛡️ Veritas Shield
            </span>
            <div className="space-x-8">
              <Link className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 hover:underline decoration-2 underline-offset-4" to="/">
                Home
              </Link>
              <Link className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 hover:underline decoration-2 underline-offset-4" to="/about">
                About
              </Link>
              <Link className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 hover:underline decoration-2 underline-offset-4" to="/subscription">
                Subscription
              </Link>
              <Link className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 hover:underline decoration-2 underline-offset-4" to="/login">
                Login
              </Link>
              <Link className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200" to="/register">
                Register
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<ChatBox />}
            />
            <Route path="/subscription" element={<SubscriptionPage />} />
            <Route path="/register" element={<RegisterPage onRegisterSuccess={handleRegisterSuccess} />} />
            <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <footer className="glass border-t border-white/20 text-center p-6 backdrop-blur-xl mt-auto">
          <div className="max-w-7xl mx-auto">
            <p className="text-gray-600 font-medium">
              © 2025 Veritas Shield. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Fighting disinformation with AI-powered analysis
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
