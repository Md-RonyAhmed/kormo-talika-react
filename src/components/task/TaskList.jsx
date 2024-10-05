import { FaStar } from "react-icons/fa";

export default function TaskList({ tasks, onEdit, onDelete, onFav }) {
  return (
    <div className="h-[490px] overflow-auto">
      <table className="table-fixed w-full">
        <thead className="dark:bg-[#121A16] bg-slate-700 sticky top-0">
          <tr>
            <th class="p-6  text-sm font-semibold capitalize w-[48px]"></th>
            <th class="p-6  text-sm font-semibold capitalize w-[300px]">
              {" "}
              Title{" "}
            </th>
            <th class="p-6  text-sm font-semibold capitalize w-full">
              {" "}
              Description{" "}
            </th>
            <th class="p-6  text-sm font-semibold capitalize md:w-[350px]">
              {" "}
              Tags{" "}
            </th>
            <th class="p-6  text-sm font-semibold capitalize md:w-[100px]">
              {" "}
              Priority{" "}
            </th>
            <th class="p-6  text-sm font-semibold capitalize md:w-[170px]">
              {" "}
              Options{" "}
            </th>
          </tr>
        </thead>
        <tbody className="dark:text-white text-black even dark:[&>*:nth-child(even)]:bg-gray-800 [&>*:nth-child(even)]:bg-gray-200">
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
                <td>
                  <div>{task.description}</div>
                </td>
                <td>
                  <ul className="flex justify-center gap-1.5 flex-wrap dark:text-white text-black">
                    {task.tags.map((tag) => (
                      <li key={tag}>
                        <span className="inline-block whitespace-nowrap rounded-[45px] dark:bg-green-700 bg-green-600 px-3 py-1 text-sm capitalize dark:text-white text-gray-800">
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
                No Tasks found...{" "}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
