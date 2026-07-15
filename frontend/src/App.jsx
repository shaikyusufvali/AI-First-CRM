import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import HCP from "./pages/HCP";
import Login from "./pages/Login";
import AIChat from "./pages/AIChat";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Protected Pages */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >

        {/* Dashboard */}
        <Route
          index
          element={<Dashboard />}
        />

        {/* HCP */}
        <Route
          path="hcp"
          element={<HCP />}
        />

        {/* AI Assistant */}
        <Route
          path="ai-chat"
          element={<AIChat />}
        />

      </Route>

    </Routes>
  );
}