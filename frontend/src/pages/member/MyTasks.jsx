import{ListChecks, CircleCheck, Clock, Dot} from "lucide-react"
import StatsCard from '../../components/common/StatsCard'
import { MyTasksCard } from "../../components/common/MyTasksCard"

export const MyTasks = () =>{

    return(

        <div className="flex flex-col">

            <div className="grid grid-cols-3 gap-8  mb-18 ">

                <StatsCard
                icon={<ListChecks />}
                title="Active Issues"
                value="148"
                color="blue"
                />

            
                <StatsCard
                icon={<CircleCheck />}
                title="Resolved"
                value="43"
                color="green"
                />

                
                <StatsCard
                icon={<Clock />}
                title="Pending Review"
                value="27"
                color="yellow"
                />

            </div>

            <div className="flex justify-between items-start ">

                <div className="min-h-screen w-90 bg-[#F3F4F6] rounded-xl flex flex-col p-4 ">

                    <div className="flex justify-start items-center">
                        <span><Dot size={48} color="#F97316" /></span>
                        <p className="font-medium"> Open</p>

                        
                    </div>
                    <div>
                        
                    </div>

                    

                    <MyTasksCard
                    priority="high"
                    title="Active Issues"
                    description="testtttt"
                    color="blue"/>
                   
                    

                </div>


                <div className="min-h-screen w-90 bg-[#F3F4F6] rounded-xl flex flex-col p-4">
                    <div className="flex justify-start items-center">
                        <span><Dot size={48} color="#3B82F6" /></span>
                        <p className="font-medium"> In Progress</p>
                    </div>
                </div>

                <div className="min-h-screen w-90 bg-[#F3F4F6] rounded-xl flex flex-col p-4">
                    <div className="flex justify-start items-center">
                        <span><Dot size={48} color="#22C55E" /></span>
                        <p className="font-medium">Done</p>
                    </div>
                </div>

            </div>

        </div>
    )


}