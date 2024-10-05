export default function TaskActions({
  onAddClick,
  onDeleteAllClick,
  dataLength,
}) {
  return (
    <div className="mt-10">
      <div className="flex items-center space-x-6">
        <button
          className="rounded-md bg-[#136942] hover:bg-opacity-75 px-3.5 py-2.5 text-sm font-semibold w-1/6"
          onClick={onAddClick}
        >
          Add Task
        </button>
        {!dataLength && (
          <button
            className={`${
              dataLength
                ? "bg-red-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-opacity-75"
            } rounded-md  px-3.5 py-2.5 text-sm font-semibold w-1/6 `}
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
