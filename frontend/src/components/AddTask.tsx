import React, { useState } from 'react';

interface AddTaskProps {
  onAdd: (description: string) => void;
}

export const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      onAdd(description);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="What needs to be done?"
            className={`input-field ${
              isFocused ? 'border-purple-500 shadow-lg' : ''
            }`}
          />
          {!description && (
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
              ✏️
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={!description.trim()}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <span className="mr-2">➕</span>
          Add Task
        </button>
      </div>
      
      {description.length > 0 && (
        <p className="text-sm text-gray-500 mt-2 ml-1">
          Press Enter or click Add Task • {description.length} characters
        </p>
      )}
    </form>
  );
};