import { useState } from "react";

export default function AddTaskModal({ onSave, taskToUpdate, onCloseClick }) {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );

  const [isAdd] = useState(Object.is(taskToUpdate, null));

  // Validation error state
  const [errors, setErrors] = useState({});

  const handleChange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setTask({
      ...task,
      [name]: value,
    });
  };

  // Validate the form fields
  const validateForm = () => {
    const newErrors = {};
    if (!task.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!task.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!task.priority) {
      newErrors.priority = "Priority is required";
    }
    if (!task.tags.length) {
      newErrors.tags = "At least one tag is required";
    } else {
      if (task.tags.length > 3) {
        newErrors.tags = "Maximum 3 tags are allowed";
      }
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      // If there are validation errors, update the error state
      setErrors(validationErrors);
    } else {
      // If no validation errors, proceed with saving the task
      onSave(task, isAdd);
    }
  };

  return (
    <>
      <div
        className="bg-black bg-opacity-85 h-full w-full z-50 absolute top-0 left-0"
        onClick={onCloseClick}
      ></div>
      <form
        className="mx-auto w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] dark:bg-[#262B28] bg-gray-700 p-9 z-50 absolute left-1/3"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11">
          {isAdd
            ? "আপনার কর্ম তালিকা তৈরি করুন"
            : "আপনার কর্ম তালিকা সংশোধন করুন"}
        </h2>

        <div className="space-y-6 text-white">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md dark:bg-[#121A16] dark:text-white text-gray-700 bg-gray-200 px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md dark:bg-[#121A16] dark:text-white text-gray-700 px-3 py-2.5 lg:min-h-[180px] bg-gray-200"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
            ></textarea>
            {errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )}
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md dark:bg-[#121A16] dark:text-white text-gray-700 bg-gray-200 px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={task.tags.join(",")}
                onChange={handleChange}
              />
              {errors.tags && <p className="text-red-500">{errors.tags}</p>}
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md dark:bg-[#121A16] dark:text-white bg-gray-200 text-gray-700 px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              {errors.priority && (
                <p className="text-red-500">{errors.priority}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-between lg:mt-20">
          <button
            type="button"
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={onCloseClick}
          >
            Close
          </button>
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
