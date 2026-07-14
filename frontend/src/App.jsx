import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import HCP from "./pages/HCP";
import Login from "./pages/Login";

import ProtectedRoute from "./components/ProtectedRoute";


export default function App() {

  return (

    <Routes>

      {/* Login Page */}
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

        <Route 
          index 
          element={<Dashboard />} 
        />


        <Route
          path="hcp"
          element={<HCP />}
        />


      </Route>


    </Routes>

  );

}