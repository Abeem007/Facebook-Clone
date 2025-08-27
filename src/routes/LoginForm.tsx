import { useState } from "react";
import GoogleLoginButton from "../component/GoogleLoginButton";
import { useAuth } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import { auth } from '../firebase'
import SignUpModal from "../component/SignUpModal";

import ForgotPasswordModal from "../component/ForgotPasswordModal";

const LoginForm: React.FC = () => {
  const {user} = useAuth()
  const [emailOrPhone, setEmailOrPhone] = useState<string>('');
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null)
  const [showSignUp, setShowSignUp] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  
const getLoginErrorMessage = (code: string) => {
  switch (code) {
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/invalid-email":
      return "Invalid email format.";
    case "auth/too-many-requests":
      return "Too many failed attempts. Please try again later.";
    case "auth/network-request-failed":
      return "Network error. Please check your connection.";
    default:
      return "Login failed. Please try again.";
  }
};


  
  if (user) return <Navigate to='/dashboard' replace />
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", { emailOrPhone, password });
    try {
      await signInWithEmailAndPassword (auth,emailOrPhone,password)
    } catch (err: any) {
      const code = err.code;
      const message = getLoginErrorMessage(code);
      setError(message)
    }
    
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-10 rounded shadow">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 pb-2">facebook</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            placeholder="Email address or phone number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="border px-3 py-2 rounded focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-3 py-2 rounded focus:outline-none"
            required
          />
{
    error && <p className="text-red-500 text-sm text-center">{error}</p>
  }
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
        <div className="pt-2">
          <div className="text-center pb-2 mt-3">
            <a
              href="#"
              className="text-blue-500 text-sm hover:underline"
              onClick={() => setShowForgotPassword(true)}
            >
              Forgotten password?
            </a>
            {showForgotPassword && (
              <ForgotPasswordModal
                onClose={() => setShowForgotPassword(false)}
              />
            )}
          </div>
          <hr className="my-4 p-2" />
          <div className="text-center">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              onClick={() => setShowSignUp(true)}
            >
              Create new account
            </button>
            {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500 mb-3 p-2">or</p>
            <GoogleLoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
