import{FolderPlus} from "lucide-react"
import { Activity, useState } from "react"
import CreateProjectModal from "../../components/modals/CreateProjectModal"


export const Project = () => {

     const [show , setShow] = useState(false)



    return(

        <>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <button onClick={()=> setShow(true)} className="flex flex-col justify-center items-center space-y-2.5 bg-white rounded-md border border-gray-400 border-dashed min-h-52 cursor-pointer">
                
                <p className="text-2xl text-[#7C7C7C]"><FolderPlus /></p>
                <p className="text-lg text-[#7C7C7C]">New Project</p>

            </button>



        </div>

        {show && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                       onClick={() => setShow(false)}>
                        <div className="w-full max-w-md"
                            onClick={(e) => e.stopPropagation()}>
        
                        <Activity mode={show ? "visible" : "hidden"}
                               className="bg-white rounded-xl shadow-lg p-6">
        
                            <CreateProjectModal onClose={() => setShow(false)}/>
        
                        </Activity>
                        </div>
        </div>}
        
        
        </>

        
    )
}