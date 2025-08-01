import React from 'react';

const StatusFilter = ({ value, onChange }) => {
  return (
    <div className="flex gap-3 mb-4">
      {['All', 'Active', 'Inactive'].map((status) => (
        <button
          key={status}
          onClick={() => onChange(status)}
          className={`px-4 py-2 rounded ${
            value === status ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
};

export default StatusFilter;
