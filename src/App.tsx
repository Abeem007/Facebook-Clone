import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import LoginForm from "./routes/LoginForm";
import Dashboard from "./routes/Dashboard";
import { RequireAuth } from "./auth/RequireAuth";
import "tailwindcss";
import FriendsPage from "./pages/FriendsPage";

import MarketplacePage from "./pages/MarketplacePage";
import VideosPage from "./pages/VideosPage";
import GamesPage from "./pages/GamesPage";



const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />

      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/friends"
        element={
          <RequireAuth>
            <FriendsPage />
          </RequireAuth>
        }
      />
      <Route
        path="/games"
        element={
          <RequireAuth>
            <GamesPage />
          </RequireAuth>
        }
      />
      <Route
        path="/marketplace"
        element={
          <RequireAuth>
            <MarketplacePage />
          </RequireAuth>
        }
      />
      <Route
        path="/videos"
        element={
          <RequireAuth>
            <VideosPage />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default App;
