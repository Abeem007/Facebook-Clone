import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase'

const ForgotPasswordModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            setSent(true);
        } catch (err: any) {
            setError('Failed to send reset email. Please try again')
        }
        
    }
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow">
        <h2 className="text-xl font-semibold mb-4">Reset your password</h2>
        {sent ? (
          <p className="text-green-600">Check your email for a reset link.</p>
        ) : (
          <form onSubmit={handleReset} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-3 py-2 rounded"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Send reset link
            </button>
          </form>
        )}
        <button
          onClick={onClose}
          className="text-gray-600 text-sm mt-4 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ForgotPasswordModal