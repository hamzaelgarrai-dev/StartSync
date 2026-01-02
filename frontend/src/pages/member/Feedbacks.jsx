import{ListChecks, CircleCheck, Clock, Dot} from "lucide-react"
import StatsCard from '../../components/ui/StatsCard'
import { useEffect, useState } from 'react'
import { Column } from '../../features/kanban/Column'
import { DndContext} from '@dnd-kit/core';
import { useGetAssignedFeedbacksQuery, useUpdateFeedbacksStatusMutation } from "../../features/feedbacks/FeedbacksApiSlice";
import { LoadingIndicator } from "../../components/ui/loading-indicator";


const COLUMNS = [
  { id: 'open', title: 'To Do' },
  { id: 'in_progress', title: 'In Progress' },
  { id: 'done', title: 'Done' },
];

export const Feedbacks = () =>{

  

     const { data: feedbacks, isLoading } = useGetAssignedFeedbacksQuery()
     const [updateStatus] = useUpdateFeedbacksStatusMutation()
     const [tasks, setTasks] = useState([]);

     useEffect(() => {
        if (feedbacks) {
          console.log("Raw feedbacks from API:", feedbacks)
            setTasks(feedbacks);
        }
    }, [feedbacks]);

    console.log(tasks);



 async function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id 
    const newStatus = over.id 



    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task,
      ),
    );

    try {
      await updateStatus({ id: taskId, status: newStatus }).unwrap();
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  }

  if (isLoading) return <div className='flex justify-center items-center w-full h-screen'><LoadingIndicator type="dot-circle" size="md"  label="Loading..."  /></div> 
    return(

        <div className="p-4">
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
      <div className="flex gap-8">
        
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => {
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status === column.id)}
              />
            );
          })}
        </DndContext>
      </div>
    </div>

       
    )


}