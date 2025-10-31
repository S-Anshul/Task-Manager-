import React from 'react';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onToggle: (task: Task) => void;
  onDelete: (id: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white border rounded-lg shadow-sm">
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggle(task)}
        className="w-5 h-5 cursor-pointer"
      />
      <span className={`flex-1 ${task.isCompleted ? 'line-through text-gray-400' : ''}`}>
        {task.description}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};