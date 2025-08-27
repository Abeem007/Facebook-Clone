import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AuthProvider} from './auth/AuthContext.tsx'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { NavProvider } from './context/NavContext.tsx'

createRoot(document.getElementById("root")!).render(
   <StrictMode>
    <AuthProvider>
      <NavProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NavProvider>
    </AuthProvider>
  </StrictMode> 
);
