import React, { useState } from 'react'
import Comments from './Comments';
import { FaComment } from 'react-icons/fa';

const CommentButton: React.FC<{postId:string}> = ({postId}) => {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 text-sm font-medium text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
      >
        <FaComment className='text-lg' /> Comment
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/20  flex items-center justify-center z-50">
          {/* Modal */}
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[85vh] flex flex-col">
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Comments</h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full h-10 w-10  bg-gray-200 hover:bg-gray-300 text-lg font-bold "
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 p-4">
              <Comments postId={postId} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentButton