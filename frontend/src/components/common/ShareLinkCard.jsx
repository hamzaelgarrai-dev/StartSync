const ShareLinkCard = ({ projectId , projectName }) => {
  const shareUrl = `${window.location.origin}/submit-feedback/${projectId}`;

  return (
    <div className="bg-blue-50 border h-44 border-blue-100 p-4 rounded-lg flex flex-col items-center justify-between">
        
      <p>{projectName}</p>
      <div className="space-y-2">
        
        <p className="text-sm font-bold text-blue-900">Shareable Feedback Link</p>
        <p className="text-xs text-blue-700">{shareUrl}</p>
      </div>
      <button 
        onClick={() => navigator.clipboard.writeText(shareUrl)}
        className="bg-white px-3 py-1 text-xs font-semibold border border-blue-200 rounded shadow-sm hover:bg-blue-50"
      >Copy Link</button>
    </div>
  )
}

export default ShareLinkCard