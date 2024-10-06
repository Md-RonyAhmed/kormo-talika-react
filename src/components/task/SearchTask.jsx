export default function SearchTask() {
  return (
    <div className="flex w-full sm:w-auto">
      <div className="relative overflow-hidden rounded-lg w-full sm:w-[280px] md:w-[380px] lg:w-[440px]">
        <input
          type="search"
          id="search-dropdown"
          className="z-20 block w-full dark:bg-[#121A16] bg-gray-200 text-gray-800 dark:text-white px-4 py-2 pr-10 focus:outline-none rounded-md"
          placeholder="কর্ম তালিকা খুঁজুন..."
        />
      </div>
    </div>
  );
}
