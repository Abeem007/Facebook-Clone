import { useState } from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

const GoogleLoginButton: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    if (loading) return;
    setLoading(true);
    setError(null);
        try {
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
          console.log("Logged in as:", user.displayName);
          
        } catch (error:any) {
          console.error("Google login error:", { message: error.message, code: error.code, details: error, });
           setError(
             error.code === "auth/popup-blocked"
               ? "Popup was blocked by the browser. Please allow popups and try again."
               : error.code === "auth/network-request-failed"
               ? "Network error. Please check your internet connection and try again."
               : "An error occurred during login. Please try again."
           );
        } finally {
          setLoading(false);
        }
    }  
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        disabled={loading}
        className={`bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-4 ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
        }`}
      >
        {loading ? "Signing in..." : "Continue with Google"}
      </button>
      {error && (
        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
      )}
    </div>
  );
}
export default GoogleLoginButton;