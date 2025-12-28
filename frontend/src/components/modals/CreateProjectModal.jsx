import React from 'react'
import { useForm } from "react-hook-form"
import { useCreateProjectMutation } from '../../features/manager/projectApiSlice';
import toast from 'react-hot-toast'


function CreateProjectModal({ onClose }) {

  const [createProject, { isLoading }] = useCreateProjectMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {

    const loadingToast = toast.loading('Creating project...');
    try {
      
      await createProject(data).unwrap()
      toast.success('Project created successfully!', { id: loadingToast })
      if (onClose) onClose()
      console.log("Project created!")
    } catch (error) {
      const msg = error.data?.message || "Failed to create project";
      console.error(error);
      toast.error(msg, { id: loadingToast })
    }
    
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-125 bg-white rounded-xl p-6 flex flex-col gap-5 shadow-lg"
    >
      
      <div>
        <p className="text-xl font-semibold">
          Project <span className="text-[#044FD2]">Details</span>
        </p>
        <p className="text-sm text-gray-500">
          Create a new project to organize feedback
        </p>
      </div>

      
      <div className="flex flex-col gap-1">
        <input
          type="text"
          {...register("name", { required: "Project name is required" })}
          placeholder="Project name"
          className="h-12 rounded-full bg-[#F4F8FC] border border-[#D7D7D7] px-4
                     focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        {errors.name && (
          <span className="text-xs text-red-500">
            {errors.name.message}
          </span>
        )}
      </div>

      
      <div className="flex flex-col gap-1">
        <textarea
          {...register("description", { required: "Description is required" })}
          placeholder="Project description..."
          rows={4}
          className="rounded-xl bg-[#F4F8FC] border border-[#D7D7D7] px-4 py-3
                     resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        {errors.description && (
          <span className="text-xs text-red-500">
            {errors.description.message}
          </span>
        )}
      </div>

     
      <button
        type="submit"
        disabled={isLoading}
        className="h-12 w-full rounded-full bg-[#0059F3] text-white font-medium
                   hover:bg-[#0047c7] transition disabled:bg-gray-300"
      >
        Create Project
      </button>
    </form>
  )
}

export default CreateProjectModal
