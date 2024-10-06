import { FaStar } from "react-icons/fa";

export default function TaskList({ tasks, onEdit, onDelete, onFav }) {
  return (
    <div className="h-[490px] overflow-auto">
      {/* Table for larger screens */}
      <table className="hidden sm:table table-fixed">
        <thead className="dark:bg-[#121A16] bg-slate-700 sticky top-0">
          <tr>
            <th className="p-6 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-6 text-sm font-semibold capitalize w-[300px]">
              Title
            </th>
            <th className="p-6 text-sm font-semibold capitalize md:w-[350px] w-full">
              Description
            </th>
            <th className="p-6 text-sm font-semibold capitalize md:w-[350px]">
              Tags
            </th>
            <th className="p-6 text-sm font-semibold capitalize md:w-[100px]">
              Priority
            </th>
            <th className="p-6 text-sm font-semibold capitalize md:w-[170px]">
              Options
            </th>
          </tr>
        </thead>
        <tbody className="dark:text-white text-black even dark:[&>*:nth-child(even)]:bg-gray-800 [&>*:nth-child(even)]:bg-gray-200 ">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr
                key={task.id}
                className="[&>td]:align-baseline [&>td]:px-4 [&>td]:py-6"
              >
                <td>
                  <button onClick={() => onFav(task.id)}>
                    {task.isFavorite ? (
                      <FaStar color="orange" />
                    ) : (
                      <FaStar color="gray" />
                    )}
                  </button>
                </td>
                <td>{task.title}</td>
                <td className="text-justify">
                  <div>{task.description}</div>
                </td>
                <td>
                  <ul className="flex justify-center gap-1.5 flex-wrap">
                    {task.tags.map((tag) => (
                      <li key={tag}>
                        <span className="inline-block whitespace-nowrap rounded-[45px] dark:bg-green-700 bg-green-600 px-3 py-1 text-sm capitalize text-white">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td
                  className={`text-center ${
                    task.priority === "High"
                      ? "text-red-500"
                      : task.priority === "Medium"
                      ? "text-green-500"
                      : "text-blue-500"
                  }`}
                >
                  {task.priority}
                </td>
                <td>
                  <div className="flex items-center justify-center space-x-3">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md"
                      onClick={() => onDelete(task.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-md"
                      onClick={() => onEdit(task)}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="[&>td]:align-baseline [&>td]:px-4 [&>td]:py-32">
              <td colSpan={6} className="text-red-400 text-center text-2xl">
                No Tasks found...
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Responsive list for mobile screens */}
      <div className="block sm:hidden">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task.id}
              className="border-b border-gray-300 dark:border-gray-700 py-4 px-2 mb-4"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold dark:text-white text-black">
                  {task.title}
                </h3>
                <button onClick={() => onFav(task.id)}>
                  {task.isFavorite ? (
                    <FaStar color="orange" />
                  ) : (
                    <FaStar color="gray" />
                  )}
                </button>
              </div>
              <p className="dark:text-gray-400 text-gray-700 text-justify">
                {task.description}
              </p>
              <div className="my-2">
                <ul className="flex flex-wrap gap-1">
                  {task.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-block whitespace-nowrap rounded-[45px] dark:bg-green-700 bg-green-600 px-2 py-1 text-xs capitalize dark:text-white text-gray-800">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span
                  className={`${
                    task.priority === "High"
                      ? "text-red-500"
                      : task.priority === "Medium"
                      ? "text-green-500"
                      : "text-blue-500"
                  } font-semibold`}
                >
                  {task.priority}
                </span>
                <div className="flex items-center space-x-3">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md w-1/2"
                    onClick={() => onDelete(task.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md w-1/2"
                    onClick={() => onEdit(task)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-red-400 text-lg">No Tasks found...</p>
        )}
      </div>
    </div>
  );
}
