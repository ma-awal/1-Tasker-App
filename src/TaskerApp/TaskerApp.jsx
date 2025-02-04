import React, { useState } from 'react';
import SearchTask from './SearchTask';
import TaskAction from './TaskAction';
import TaskList from './TaskList';
import TaskModal from './TaskModal';
const defaultTask = [
  {
    id: crypto.randomUUID(),
    title: 'Dream Of Life',
    description: 'I always belive In my selfe that dream onc came true',
    tags: ['Web', 'App', 'Mobile'],
    priority: 'High',
  },
];
function TaskerApp() {
  const [tasks, setTasks] = useState(defaultTask);
  const [showModal, setShowModal] = useState(false);
  const [updateTask, setUpdateTask] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  function handleAddEditTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    handleClose();
  }

  function handleEdit(taskToEdit) {
    setShowModal(true);
    setUpdateTask(taskToEdit);
  }
  function handleDelete(taskId) {
    const tasksAfterDeleted = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDeleted);
  }
  function handleDeleteAll() {
    tasks.length = 0;
    setTasks([...tasks]);
  }
  function handleClose() {
    setShowModal(false);
    setUpdateTask(null);
  }
  function handleSearch(searchTerm) {
    setIsSearch(!isSearch);
    const filteredTask = tasks.filter((task) => {
      return task.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setTasks([...filteredTask]);
  }
  return (
    <div className="basis-8/12 p-8 space-y-8 bg-slate-800 shadow-slate-400 shadow-sm rounded-md  my-4">
      {showModal && (
        <TaskModal
          updateTask={updateTask}
          onSave={handleAddEditTask}
          onClose={handleClose}
        />
      )}
      <SearchTask onSearch={handleSearch} />

      <TaskAction
        onAddClick={() => setShowModal(true)}
        onDeleteAll={handleDeleteAll}
      />
      <TaskList
        tasks={tasks}
        isSearch={isSearch}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default TaskerApp;
