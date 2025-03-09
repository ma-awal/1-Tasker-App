import React from 'react';

function TaskAction({ onAddClick, onDeleteAll }) {
  return (
    <div className="flex justify-between items-center    pb-2">
      <h3 className="text-3xl text-red-400 capitalize font-bold"> Task</h3>
      <div className="flex gap-2">
        <button
          onClick={onAddClick}
          className="text-base bg-green-500 py-2 px-2 capitalize text-white w-[80px]"
        >
          Add
        </button>
        <button
          onClick={onDeleteAll}
          className="text-base bg-red-500 py-2 px-2 capitalize text-white w-[100px]"
        >
          Delete All
        </button>
      </div>
    </div>
  );
}

export default TaskAction;
