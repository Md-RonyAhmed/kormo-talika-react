import { useEffect, useState } from "react";
import AddTaskModal from "./AddTaskModal";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import NoTasksFound from "./NoTasksFound";

export default function TaskBoard({ tasks, setTasks, allTasks, searchTerm }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddEditTask(newTask, isAdd) {
    if (isAdd) {
      // Add new task to the full task list (allTasks)
      setTasks([...allTasks, newTask]);
    } else {
      // Update the full task list (allTasks), not just the filtered tasks
      setTasks(
        allTasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    handleCloseClick();
  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleDeleteTask(taskId) {
    // Delete from the full task list (allTasks)
    const tasksAfterDelete = allTasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  }

  function handleDeleteAllClick() {
    setTasks([]);
  }

  function handleFavorite(taskId) {
    // This portion of the commented code is not fully perfect. Here
    // we are not doing the deep cloning of the tasks array. The tasks array has
    // objects inside, while using the spread operator, it will only make the shallow copy.
    // But we need to do the deep copy.

    // We are not removing this commented code as it was part of the recording.
    // But the same code is now made better and written below.
    /*
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        const newTasks = [...tasks];
        newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
        setTasks(newTasks);
        */

    // The better way of managing updates in the object within an array as a
    // state in react.
    // Toggle favorite in the full task list (allTasks)
    const updatedTasks = allTasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isFavorite: !task.isFavorite };
      } else {
        return task;
      }
    });
    // Update the tasks state with the full list (allTasks), ensuring no task is lost
    setTasks(updatedTasks);
  }

  function handleCloseClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }

  return (
    <>
      <section className="mt-16 md:mt-20" id="tasks">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-10 text-xl sm:text-2xl md:text-3xl text-center font-semibold">
            <h1 className="text-green-700 dark:text-white">
              আপনার কর্ম তালিকা তৈরি করুন
            </h1>
          </div>

          <div
            className="rounded-lg border dark:border-[rgba(206,206,206,0.12)] border-gray-400 
                     dark:bg-[rgba(38,43,40,0.6)] bg-gray-300 
                     backdrop-filter backdrop-blur-lg shadow-lg 
                     px-4 py-6 sm:px-6 md:px-8 lg:px-10 xl:px-12 
                     md:py-10 lg:py-12"
          >
            {tasks.length > 0 || searchTerm ? (
              <TaskList
                tasks={tasks} // Display filtered tasks
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                onFav={handleFavorite}
              />
            ) : (
              <NoTasksFound />
            )}
            <TaskActions
              dataLength={tasks.length <= 0}
              onAddClick={() => setShowAddModal(true)}
              onDeleteAllClick={handleDeleteAllClick}
            />
          </div>
        </div>
      </section>
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddEditTask}
          onCloseClick={handleCloseClick}
          taskToUpdate={taskToUpdate}
        />
      )}
    </>
  );
}
