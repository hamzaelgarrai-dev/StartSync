import React from 'react'
import{ListChecks, CircleCheck, Clock, ChartLine} from "lucide-react"
import StatsCard from '../../components/common/StatsCard'
import { useGetIssuesQuery, useGetStatsQuery } from '../../features/manager/issuesApiSlice'

export  const Overview = () => {


const { data, issuesLoading } = useGetIssuesQuery();

const issues = data?.data ?? [];
  const { data: stats = {}, isLoading: statsLoading } = useGetStatsQuery()


  console.log('issues', issues)


  if (issuesLoading || statsLoading) return <p>Loading...</p>



  return (
     <div className='flex flex-col'>
        
      <div className="grid grid-cols-4 gap-6 mb-6">
        
        
        <StatsCard
          icon={<ListChecks />}
          title="Open"
          value={stats.open}
          color="blue"
        />

       
        <StatsCard
          icon={<CircleCheck />}
          title="Resolved"
          value={stats.done}
          color="green"
        />

        
        <StatsCard
          icon={<Clock />}
          title="In Progress"
          value={stats.in_progress}
          color="yellow"
        />

        <StatsCard
          icon={<ChartLine />}
          title="Overall Workload"
          value={`${stats.work_percentage}%`}
          color="purple"
        />

      </div >
        <div className='flex flex-col rounded-3xl border border-[#e0e7f5] p-2 bg-[#F4F8FC]'>

           

            <div className="rounded-2xl border border-[#e0e7f5] bg-white px-2 py-6 ">
            
            <div className="flex items-center justify-between p-6 py-4 ">
                <h2 className="text-lg font-semibold text-gray-900">Recent Issues</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer">
                View All
                </button>
            </div>

            
            <div className="overflow-x-auto">
                <table className="w-full">
                
                <thead className="border-b">
                    <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Issue ID
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Priority
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Assignee
                    </th>

                    </tr>
                </thead>

                
                <tbody className="divide-y divide-gray-200">
                    {issues?.map(issue => (

                

                    <tr key={issue.id} className="hover:bg-gray-50">
                    
                        <td className="px-6 py-4">
                        <span className="text-blue-600 font-medium">{issue.id}</span>
                        </td>

                    
                        <td className="px-2 py-4">
                        <span className="text-gray-900">{issue.title}</span>
                        </td>

                        
                        <td className="px-2 py-4">
                        {issue.status === 'in_progress' && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            In Progress
                            </span>
                        )}

                        {issue.status === 'open' && (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                            Open
                            </span>
                        )}

                        {issue.status === 'done' && (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            Done
                            </span>
                        )}

                        </td>

                        
                        <td className="px-6 py-4">
                        {issue.priority === 'high' && (
                            <div className="flex items-center gap-2">
                            <span className="font-bold text-red-600">↑</span>
                            <span className="text-gray-700">High</span>
                            </div>
                        )}
                        {issue.priority === 'medium' && (
                            <div className="flex items-center gap-2">
                            <span className="font-bold text-yellow-600">—</span>
                            <span className="text-gray-700">Medium</span>
                            </div>
                        )}
                        {issue.priority === 'low' && (
                            <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-600">↓</span>
                            <span className="text-gray-700">Low</span>
                            </div>
                        )}

                        </td>

                        
                        <td className="px-6 py-4">
                                
                            <span className="text-gray-700 cursor-pointer">{issue.assigned_user?.name ?? issue.assigned_team?.name ?? <button className='bg-blue-700'>Assigne</button>}</span>
                       
                        </td>

                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>


        </div>
      

    </div>
  )
}
