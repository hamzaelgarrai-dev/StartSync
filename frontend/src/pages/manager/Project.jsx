import{FolderPlus} from "lucide-react"
export const Project = () => {



    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="flex flex-col justify-center items-center space-y-2.5 bg-white rounded-md border border-gray-400 border-dashed min-h-52 cursor-pointer">
                
                <p className="text-2xl text-[#7C7C7C]"><FolderPlus /></p>
                <p className="text-lg text-[#7C7C7C]">New Project</p>

            </div>
            

        </div>
    )
}