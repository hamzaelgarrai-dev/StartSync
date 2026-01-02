import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Send, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { useCreateFeedbackMutation } from '../../features/feedbacks/FeedbacksApiSlice';
import { toast } from 'react-hot-toast';

const FeedbackForm = () => {
  const { id } = useParams();

  const { register,
     handleSubmit, 
     reset,
      watch,
     formState: { errors } } = useForm()

  const [createFeedback, { isLoading }] = useCreateFeedbackMutation()

  const selectedImage = watch('image');
  const hasImage = selectedImage && selectedImage.length > 0
  
  const onSubmit = async (data) => {

    const loadingToast = toast.loading('Submiting Feedback...')
    try {
      await createFeedback({
        title: data.title,
        description: data.description,
        priority: data.priority,
        project_id: id,
        image: data.image?.[0],
      }).unwrap()
      toast.success('Feedback sent successfully!')
      reset()
    } catch (err) {
      console.error(err)
      toast.error('Failed to submit feedback. Please try again')
    }

   


  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Submit Feedback
          </h1>
          <p className="text-gray-500 mt-2">Project ID: <span>{id}</span></p>
        </div>


        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col rounded-3xl border border-[#e0e7f5] p-2 bg-[#F4F8FC]">
          <div className='rounded-2xl border border-[#e0e7f5] bg-white  p-8'>

            <div className="space-y-6">

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Issue Title</label>
                <input
                 {...register("title", { required: "Title is required" })}
                  type="text"
                  placeholder="issue title"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
              </div>


              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Details</label>
                <textarea
                  {...register("description", { required: "Details are required" })}
                  rows="5"
                  placeholder="Please describe the issue in detail..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                ></textarea>
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
              </div>


              <div className="flex gap-6 items-end w-full">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Priority</label>
                  <select 
                  {...register("priority")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <div className='flex-1'>
                    <input 
                      {...register("image")}
                      type="file" 
                      id="feedback-image" 
                      className="hidden" 
                      accept="image/*"
                      />
                      <label 
                    htmlFor="feedback-image" 
                    className={`w-full py-3 border border-gray-400 font-medium rounded-lg cursor-pointer flex items-center justify-center gap-2 transition-colors ${
                      hasImage 
                        ? 'bg-green-50 text-green-700 border-green-500' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {hasImage ? (
                      <>
                        <CheckCircle size={18} />
                        <span>Image Attached</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon size={18} />
                        <span>Upload Image</span>
                      </>
                    )}
                  </label>
                </div>
              
              </div>


              <button
                disabled={isLoading}
                type="submit"
                className="disabled:bg-gray-300 w-full h-12 bg-[#0059F3] rounded-4xl flex justify-center items-center text-white cursor-pointer"
              >
                {isLoading ? (
                    <span>Sending...</span>
                ) : (
                    <>
                        <Send size={18} /> Send Feedback
                    </>
                )}
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