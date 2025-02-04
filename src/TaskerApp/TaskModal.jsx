import React, { useState } from 'react';

function TaskModal({ onSave, onClose, updateTask }) {
  const [task, setTask] = useState(
    updateTask || {
      id: crypto.randomUUID(),
      title: '',
      description: '',
      tags: [],
      priority: '',
    }
  );
  const [isAdd, setIsAdd] = useState(Object.is(updateTask, null));
  function handleChange(evt) {
    const name = evt.target.name;

    let value = evt.target.value;
    if (name === 'tags') {
      value = value.split(',');
    }
    setTask({
      ...task,
      [name]: value,
    });
  }
  return (
    <div className="fixed inset-0 bg-gray-800  bg-opacity-80 flex items-center justify-center  ">
      <div className="bg-slate-400 w-1/4 rounded-lg shadow-lg p-6">
        <h2 id="modalTitle" className="text-xl font-semibold mb-4">
          Add Task
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="taskTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="taskTitle"
              name="title"
              value={task.title}
              onChange={handleChange}
              className="w-full border-gray-300 py-1 px-2 shadow-sm outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="taskDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="taskDescription"
              name="description"
              value={task.description}
              onChange={handleChange}
              rows="3"
              className="w-full   border-gray-300 py-1 px-2 outline-none"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="taskTags"
              className="block text-sm font-medium text-gray-700   py-1 px-2"
            >
              Tags
            </label>
            <input
              type="text"
              id="taskTags"
              name="tags"
              value={task.tags}
              onChange={handleChange}
              placeholder="Examp: Web ,App"
              className="w-full     shadow-sm    py-1 px-2 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="taskPriority"
              className="block text-sm font-medium text-gray-700 outline-none"
            >
              Priority
            </label>
            <select
              id="taskPriority"
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className="w-full  py-1 px-2 shadow-sm outline-none   "
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-red-300   hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={() => onSave(task, isAdd)}
              className="px-4 py-2 bg-orange-500 text-white   hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;
