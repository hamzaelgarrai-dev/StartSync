import React from 'react';
import { useParams } from 'react-router-dom';
import { Send } from 'lucide-react';

const FeedbackForm = () => {
  const { id } = useParams();


  const handleSubmit = async (e) => {
    e.preventDefault();
  

    
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Submit Feedback
          </h1>
          <p className="text-gray-500 mt-2">Project ID: <span>{id}</span></p>
        </div>

      
        <form onSubmit={handleSubmit} className="flex flex-col rounded-3xl border border-[#e0e7f5] p-2 bg-[#F4F8FC]">
            <div className='rounded-2xl border border-[#e0e7f5] bg-white  p-8'>

                <div className="space-y-6">
        
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Issue Title</label>
              <input 
                required
                type="text" 
                placeholder="issue title"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>


            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Details</label>
              <textarea 
                required
                rows="5" 
                placeholder="explain the issue"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
              ></textarea>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Priority</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none">
                  <option value="low">Low </option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              
            </div>

            
            <button 
              
              type="submit" 
              className="disabled:bg-gray-300 w-full h-12 bg-[#0059F3] rounded-4xl flex justify-center items-center text-white cursor-pointer"
            >
              <Send size={18}/> Send Feedback
            </button>
          </div>
            </div>
          
        </form>
        
        <p className="text-center text-gray-400 text-sm mt-8">
          Powered by StartSync
        </p>
      </div>
    </div>
  )
}

export default FeedbackForm