import { FaStar } from "react-icons/fa";

export default function TaskList() {
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
          <tr className="[&>td]:align-baseline [&>td]:px-4 [&>td]:py-6">
            <td>
              <button>
                <FaStar color="gray" />
              </button>
            </td>
            <td>Complete React Project</td>
            <td className="text-justify">
              <div>Finish the project and submit it by the end of the week.</div>
            </td>
            <td>
              <ul className="flex justify-center gap-1.5">
                <li>
                  <span className="inline-block whitespace-nowrap rounded-[45px] dark:bg-green-700 bg-green-600 px-3 py-1 text-sm capitalize text-white">React</span>
                </li>
                <li>
                  <span className="inline-block whitespace-nowrap rounded-[45px] dark:bg-green-700 bg-green-600 px-3 py-1 text-sm capitalize text-white">Project</span>
                </li>
                <li>
                  <span className="inline-block whitespace-nowrap rounded-[45px] dark:bg-green-700 bg-green-600 px-3 py-1 text-sm capitalize text-white">Deadline</span>
                </li>
              </ul>
            </td>
            <td className="text-center text-blue-500">High</td>
            <td>
              <div className="flex items-center justify-center space-x-3">
                <button className="bg-red-500 text-white px-3 py-1 rounded-md">
                  Delete
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
                  Edit
                </button>
              </div>
            </td>
          </tr>
          <tr className="[&>td]:align-baseline [&>td]:px-4 [&>td]:py-6">
            <td>
              <button>
                <FaStar color="gray" />
              </button>
            </td>
            <td>Complete React Project</td>
            <td className="text-justify">
              <div>Finish the project and submit it by the end of the week.</div>
            </td>
            <td>
              <ul className="flex justify-center gap-1.5">
                <li>
                  <span className="inline-block whitespace-nowrap rounded-[45px] dark:bg-green-700 bg-green-600 px-3 py-1 text-sm capitalize text-white">React</span>
                </li>
                <li>
                  <span className="inline-block whitespace-nowrap rounded-[45px] dark:bg-green-700 bg-green-600 px-3 py-1 text-sm capitalize text-white">Project</span>
                </li>
                <li>
                  <span className="inline-block whitespace-nowrap rounded-[45px] dark:bg-green-700 bg-green-600 px-3 py-1 text-sm capitalize text-white">Deadline</span>
                </li>
              </ul>
            </td>
            <td className="text-center text-blue-500">High</td>
            <td>
              <div className="flex items-center justify-center space-x-3">
                <button className="bg-red-500 text-white px-3 py-1 rounded-md">
                  Delete
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
                  Edit
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
