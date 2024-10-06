export default function TaskActions({
  onAddClick,
  onDeleteAllClick,
  dataLength,
}) {
  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
        {/* Add Task Button */}
        <button
          className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 rounded-md bg-[#136942] hover:bg-opacity-75 px-3.5 py-2.5 text-sm font-semibold text-white"
          onClick={onAddClick}
        >
          Add Task
        </button>

        {/* Delete All Button */}
        {!dataLength && (
          <button
            className={`w-full sm:w-1/3 md:w-1/4 lg:w-1/6 ${
              dataLength
                ? "bg-red-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-opacity-75"
            } rounded-md px-3.5 py-2.5 text-sm font-semibold text-white`}
            onClick={onDeleteAllClick}
            disabled={dataLength}
          >
            Delete All
          </button>
        )}
      </div>
    </div>
  );
}
