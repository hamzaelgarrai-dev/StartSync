

export const Team = () =>{

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


return(
    
    <div className="bg-white rounded-xl min-h-screen border border-gray-300 space-y-2.5 mx-auto p-6 ">

        <p className="text-lg font-semibold text-gray-900">Recent Teams</p>

        <div className="overflow-x-auto">
                <table className="w-full">
                
                <thead className="border-b">
                    <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Team ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Team Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Project
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Members
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Add Member
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Delete Member
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
                      <span className="text-gray-900">{issue.status}</span>
                        </td>

                        <td className="px-6 py-4">
                      <span className="text-gray-900">5</span>
                        </td>

                        
                        <td className="px-6 py-4">
                            
                                <button className="bg-[#2563EB] w-22 h-8 text-white rounded-md cursor-pointer">Add</button>
                            
                        </td>

                        
                        <td className="px-6 py-4">
                           <button className="bg-[#EB2528] w-22 h-8 text-white rounded-md cursor-pointer">Delete</button>
                        </td>

                        
                
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

    </div>
)


}