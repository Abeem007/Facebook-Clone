import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebase";
import { updateProfile } from "firebase/auth";

const SignUpModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const getErrorMessage = (code: string) => {
    switch (code) {
      case "auth/email-already-in-use":
        return "This email is already registered.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
      });
      onClose();
    } catch (err: any) {
        const code = err.code;
      setError(getErrorMessage(code));
      
    }
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-100">
        <h2 className="text-xl font-semibold mb-4 p-3">Create account</h2>
        <form onSubmit={handleSignUp} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border px-3 py-2 rounded"
            required
          />
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border px-3 py-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-3 py-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-3 py-2 rounded"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Sign up
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-600 text-sm mt-2 hover:underline"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUpModal;
