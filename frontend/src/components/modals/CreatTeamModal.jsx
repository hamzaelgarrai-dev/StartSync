import React from 'react'
import { useForm } from "react-hook-form"

function CreatTeamModal({ onSubmit }) {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm()

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-125 bg-white rounded-xl p-6 flex flex-col gap-5 shadow-lg"
    >
      
      <div>
        <p className="text-xl font-semibold">
          Team <span className="text-[#044FD2]">Details</span>
        </p>
        <p className="text-sm text-gray-500">
          Create a new Team
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
  <select
    {...register("project_id", { required: "Please select a project type" })}
    defaultValue=""
    className="rounded-xl bg-[#F4F8FC] border border-[#D7D7D7] px-4 py-3
               focus:outline-none focus:ring-2 focus:ring-blue-300"
  >
    <option  value="" disabled>
      Select project type
    </option>
    <option value="website">Website</option>
    <option value="web_app">Web Application</option>
    <option value="mobile_app">Mobile Application</option>
  </select>

  {errors.project_id && (
    <span className="text-xs text-red-500">
      {errors.project_id.message}
    </span>
  )}
</div>

     
      <button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-full bg-[#0059F3] text-white font-medium
                   hover:bg-[#0047c7] transition disabled:bg-gray-300"
      >
        {isSubmitting ? "Creating..." : "Create Project"}
      </button>
    </form>
  )
}

export default CreatTeamModal