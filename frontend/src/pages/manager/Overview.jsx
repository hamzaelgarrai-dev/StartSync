import React from 'react'
import{ListChecks, CircleCheck, Clock, ChartLine} from "lucide-react"
import StatsCard from '../../components/common/StatsCard'

export  const Overview = () => {

    const issues = [
    {
      id: '142',
      title: 'Fix navigation menu on mobile',
      status: 'In Progress',
      priority: 'High',
      assignee: 'Sarah Chen',
      dueDate: '2024-12-05'
    },
    {
      id: '089',
      title: 'Implement OAuth authentication',
      status: 'Review',
      priority: 'High',
      assignee: 'Mike Johnson',
      dueDate: '2024-12-03'
    },
    {
      id: '234',
      title: 'Update app icon for iOS',
      status: 'Open',
      priority: 'Medium',
      assignee: 'Assign To',
      dueDate: '2024-12-08'
    },
    {
      id: '156',
      title: 'Optimize image loading performance',
      status: 'In Progress',
      priority: 'High',
      assignee: 'Tom Brown',
      dueDate: '2024-12-04'
    },
    {
      id: '078',
      title: 'Design email campaign template',
      status: 'Open',
      priority: 'Low',
      assignee: 'Assign To',
      dueDate: '2024-12-10'
    },
    {
      id: '091',
      title: 'Add rate limiting to API endpoints',
      status: 'Testing',
      priority: 'Medium',
      assignee: 'Mike Johnson',
      dueDate: '2024-12-06'
    },
    {
      id: '159',
      title: 'Implement dark mode toggle',
      status: 'In Progress',
      priority: 'Medium',
      assignee: 'Sarah Chen',
      dueDate: '2024-12-07'
    },
  ];



  return (
     <div className='flex flex-col'>
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        
        
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

        <StatsCard
          icon={<ChartLine />}
          title="Overall Workload"
          value="78%"
          color="purple"
        />

      </div>
        <div className='flex flex-col'>

            <p className='font-medium mb-5'>Issue Insights</p>

            <div className="bg-white rounded-lg shadow">
            
            <div className="flex items-center justify-between p-6 py-4 ">
                <h2 className="text-lg font-semibold text-gray-900">Recent Issues</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Due Date
                    </th>
                    </tr>
                </thead>

                
                <tbody className="divide-y divide-gray-200">
                    {issues.map((issue) => (
                    <tr key={issue.id} className="hover:bg-gray-50">
                    
                        <td className="px-6 py-4">
                        <span className="text-blue-600 font-medium">{issue.id}</span>
                        </td>

                    
                        <td className="px-2 py-4">
                        <span className="text-gray-900">{issue.title}</span>
                        </td>

                        
                        <td className="px-6 py-4">
                        {issue.status === 'In Progress' && (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            In Progress
                            </span>
                        )}
                        {issue.status === 'Review' && (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                            Review
                            </span>
                        )}
                        {issue.status === 'Open' && (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                            Open
                            </span>
                        )}
                        {issue.status === 'Testing' && (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                            Testing
                            </span>
                        )}
                        </td>

                        
                        <td className="px-6 py-4">
                        {issue.priority === 'High' && (
                            <div className="flex items-center gap-2">
                            <span className="font-bold text-red-600">↑</span>
                            <span className="text-gray-700">High</span>
                            </div>
                        )}
                        {issue.priority === 'Medium' && (
                            <div className="flex items-center gap-2">
                            <span className="font-bold text-yellow-600">—</span>
                            <span className="text-gray-700">Medium</span>
                            </div>
                        )}
                        {issue.priority === 'Low' && (
                            <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-600">↓</span>
                            <span className="text-gray-700">Low</span>
                            </div>
                        )}
                        </td>

                        
                        <td className="px-6 py-4">
                        {issue.assignee === 'Assign To' ? (
                            <span className="text-blue-600">{issue.assignee}</span>
                        ) : (
                            <span className="text-gray-700">{issue.assignee}</span>
                        )}
                        </td>

                        
                        <td className="px-6 py-4">
                        <span className="text-gray-600">{issue.dueDate}</span>
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
