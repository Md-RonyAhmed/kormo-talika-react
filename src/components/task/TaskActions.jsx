export default function TaskActions() {
  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
        {/* Add Task Button */}
        <button className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 rounded-md bg-[#136942] hover:bg-opacity-75 px-3.5 py-2.5 text-sm font-semibold text-white">
          Add Task
        </button>

        {/* Delete All Button */}
        <button className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 bg-red-500 hover:bg-opacity-75 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white">
          Delete All
        </button>
      </div>
    </div>
  );
}
