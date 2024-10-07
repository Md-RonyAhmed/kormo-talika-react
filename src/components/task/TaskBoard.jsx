import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  return (
    <section className="mt-16 md:mt-20" id="tasks">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-xl sm:text-2xl md:text-3xl text-center font-semibold">
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
          <TaskList />
          <TaskActions />
        </div>
      </div>
    </section>
  );
}
