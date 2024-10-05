

export default function SearchTask() {
  return (
    <div className="flex">
      <div className="relative overflow-hidden rounded-lg md:min-w-[380px] lg:min-w-[440px]">
        <input
          type="search"
          id="search-dropdown"
          className="z-20 block w-full dark:bg-[#121A16] bg-gray-200 text-gray-500 px-4 py-2 pr-10 focus:outline-none"
          placeholder="কর্ম তালিকা খুঁজুন..."
        />
      </div>
    </div>
  );
}
