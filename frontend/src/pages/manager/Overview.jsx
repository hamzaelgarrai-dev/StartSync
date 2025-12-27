import React from 'react'
import { ListChecks, CircleCheck, Clock, ChartLine } from "lucide-react"
import StatsCard from '../../components/common/StatsCard'
import { useGetIssuesQuery, useGetStatsQuery } from '../../features/manager/issuesApiSlice'

export const Overview = () => {


    const { data: issues, issuesLoading } = useGetIssuesQuery();



    const { data: stats = {}, isLoading: statsLoading } = useGetStatsQuery()


    console.log('issues', issues)
    const displayPercentage = stats?.work_percentage ?? 0;


    if (issuesLoading || statsLoading) return <p>Loading...</p>



    return (
        <div className='flex flex-col'>

            <div className="grid grid-cols-4 gap-6 mb-6">


                <StatsCard
                    icon={<ListChecks />}
                    title="Open"
                    value={stats?.open ?? 0}
                    color="blue"
                />


                <StatsCard
                    icon={<CircleCheck />}
                    title="Resolved"
                    value={stats?.done ?? 0}
                    color="green"
                />


                <StatsCard
                    icon={<Clock />}
                    title="In Progress"
                    value={stats?.in_progress ?? 0}
                    color="yellow"
                />

                <StatsCard
                    icon={<ChartLine />}
                    title="Overall Workload"
                    value={`${displayPercentage}%`}
                    color="purple"
                />

            </div >
            <div className='flex flex-col rounded-3xl border border-[#e0e7f5] p-2 bg-[#F4F8FC]'>



                <div className="rounded-2xl border border-[#e0e7f5] bg-white px-2 py-6 ">

                    <div className="flex items-center justify-between p-6 py-4 ">
                        <h2 className="text-lg font-semibold text-gray-900">Recent Issues</h2>
                        
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

                            {issues?.length > 0 ? (

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

                                                {issue.assigned_user || issue.assigned_team ? (
                                                    
                                                    <span className="text-sm text-gray-900 font-medium">
                                                        {issue.assigned_user?.name || issue.assigned_team?.name}
                                                    </span>
                                                ) : (
                                                    
                                                    <button
                                                        onClick={() => handleAssign(issue.id)} 
                                                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                                                    >
                                                        Assign
                                                    </button>
                                                )}

                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            ) : (<tr>
                                <td colSpan="5" className="px-6 py-10 text-center">
                                    <p className="text-gray-500 font-medium">No feedback found</p>
                                </td>
                            </tr>)}

                        </table>
                    </div>
                </div>


            </div>


        </div>
    )
}
