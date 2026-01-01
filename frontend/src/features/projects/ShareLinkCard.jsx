import React, { useState } from 'react';

const ShareLinkCard = ({ projectId , projectName }) => {
  const [copied, setCopied] = useState(false)
  const shareUrl = `${window.location.origin}/submit-feedback/${projectId}`

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  };

  return (
    <div className="bg-white border border-gray-300 p-5 rounded-md h-44 flex flex-col justify-between shadow-sm">
      <div className="overflow-hidden">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{projectName}</h3>
        <p className="text-[10px] text-gray-400 uppercase font-bold mt-1">Feedback Link</p>
      </div>
      <div className="w-full space-y-3">
        <div className="bg-gray-50 border border-gray-200 px-2 py-1.5 rounded text-[11px] text-gray-500 font-mono truncate">
          {shareUrl}
        </div>
        
        <button 
          onClick={handleCopy}
          className={`w-full py-2 text-xs font-bold rounded transition-all border ${
            copied 
              ? 'bg-blue-600 border-blue-950 text-white' 
              : 'bg-white border-gray-400 text-gray-700 hover:bg-gray-50'
          }`}
        >
          {copied ? "Link Copied" : "Copy Link"}
        </button>
      </div>
    </div>
  )
}

export default ShareLinkCard