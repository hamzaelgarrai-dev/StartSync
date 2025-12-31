import{FolderPlus} from "lucide-react"
import { useState } from "react"
import CreateProjectModal from "../../components/modals/CreateProjectModal"
import { useGetProjectsQuery } from "../../features/manager/projectApiSlice"
import { LoadingIndicator } from "../../components/application/loading-indicator/loading-indicator"
import ShareLinkCard from "../../components/common/ShareLinkCard"


export const Project = () => {

     const [show , setShow] = useState(false)

     const { data: projectsData, isLoading: projectsLoading } = useGetProjectsQuery()


     



     if (projectsLoading) return <div className='flex justify-center items-center w-full h-screen'><LoadingIndicator type="dot-circle" size="md"  label="Loading..."  /></div> 
    return(

        <>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-screen">

            <button onClick={()=> setShow(true)} className="flex flex-col justify-center items-center space-y-2.5 bg-white rounded-md border border-gray-400 border-dashed h-44 cursor-pointer">
                
                <p className="text-2xl text-[#7C7C7C]"><FolderPlus /></p>
                <p className="text-lg text-[#7C7C7C]">New Project</p>

            </button>

            {projectsData?.map((project)=> (

                <ShareLinkCard key={project.id} projectId={project.id} projectName={project.name} />
                
            ))}



        </div>

        {show && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                       onClick={() => setShow(false)}>
                        <div className="w-full max-w-md"
                            onClick={(e) => e.stopPropagation()}>
        
                        
        
                            <CreateProjectModal onClose={() => setShow(false)}/>
        
                       
                        </div>
                </div>}
        
        
        </>

        
    )
}