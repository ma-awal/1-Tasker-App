import React from 'react';

function TaskList({ tasks, onEdit, onDelete, isSearch }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center text-white text-lg">
        {isSearch
          ? 'No results match your search.'
          : 'No tasks available. Start by adding a new task.'}
      </div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <tr>
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Tags</th>
            <th className="py-3 px-6 text-left">Priority</th>
            <th className="py-3 px-6 text-left">Option</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {tasks.map((task) => {
            const { id, title, description, tags, priority } = task;
            return (
              <tr
                key={id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left ">{title}</td>
                <td className="py-3 px-6 text-left w-auto">{description}</td>
                <td className="py-3 px-6 text-left flex gap-1">
                  {tags.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-xs flex-grow items-center"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </td>
                <td className="py-3 px-6 text-left">
                  <span className="bg-green-100 text-green-600 py-1 px-3 rounded-full text-xs  ">
                    {priority}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => onEdit(task)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(task.id)}
                    className="text-red-500 hover:underline ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
