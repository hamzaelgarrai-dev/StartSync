import{ListChecks, CircleCheck, Clock, Dot} from "lucide-react"
import StatsCard from '../../components/common/StatsCard'
// import { MyTasksCard } from "../../components/common/MyTasksCard"
import { useState } from 'react'
import { Column } from './kanban/Column'
import { DndContext} from '@dnd-kit/core';


const COLUMNS = [
  { id: 'TODO', title: 'To Do' },
  { id: 'IN_PROGRESS', title: 'In Progress' },
  { id: 'DONE', title: 'Done' },
];


const INITIAL_TASKS = [
  {
    id: '1',
    title: 'Research Project',
    description: 'Gather requirements and create initial documentation',
    status: 'TODO',
  },
  {
    id: '2',
    title: 'Design System',
    description: 'Create component library and design tokens',
    status: 'TODO',
  },
  {
    id: '3',
    title: 'API Integration',
    description: 'Implement REST API endpoints',
    status: 'IN_PROGRESS',
  },
  {
    id: '4',
    title: 'Testing',
    description: 'Write unit tests for core functionality',
    status: 'DONE',
  },
];

export const Feedbacks = () =>{
     const [tasks, setTasks] = useState(INITIAL_TASKS);


     function handleDragEnd(event) {
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
  }

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