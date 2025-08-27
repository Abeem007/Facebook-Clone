import React, { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
export const RequireAuth: React.FC<{ children:JSX.Element }> = ({
 children   
}) => {
    const { user, loading } = useAuth();
    if (loading) return null;
    return user? children: <Navigate to = '/' replace/>
}