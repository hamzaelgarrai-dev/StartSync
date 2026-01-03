import React, { useState } from 'react';
import { useAssignFeedbackMutation, useGetProjectMembersQuery } from '../../features/feedbacks/FeedbacksApiSlice';
import { toast } from 'react-hot-toast';
import { User, ChevronDown } from 'lucide-react';

const AssigneeButton = ({ feedback }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { data: members, isLoading } = useGetProjectMembersQuery(feedback.project_id);
  const [assignFeedback] = useAssignFeedbackMutation();

  const handleSelection = async (userId) => {
    const loadingToast = toast.loading('Assigning Feedback...')
    try {
      await assignFeedback({ 
        feedbackId: feedback.id, 
        userId 
      }).unwrap();
      toast.success('Assigned succesfully' , { id: loadingToast });
      setIsEditing(false);
    } catch (err) {
      toast.error('Failed to assign',{ id: loadingToast });
    }
  };

  if (!isEditing) {
    return (
      <button 
        onClick={() => setIsEditing(true)}
        className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600 font-medium"
      >
        <User size={14} />
        {feedback.assigned_user ? feedback.assigned_user.name : "Assign Member"}
        <ChevronDown size={12} />
      </button>
    );
  }

  return (
    <select
      autoFocus
      className="text-sm border border-gray-300 rounded p-1 outline-none focus:ring-2 focus:ring-blue-500"
      onBlur={() => setIsEditing(false)}
      onChange={(e) => handleSelection(e.target.value)}
      defaultValue={feedback.assigned_to_user_id || ""}
    >
      <option value="" disabled>Select a member</option>
      {members?.map(member => (
        <option key={member.id} value={member.id}>
          {member.name}
        </option>
      ))}
    </select>
  );
};

export default AssigneeButton;