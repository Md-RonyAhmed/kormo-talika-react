import Header from "../shared/Header";
import TaskBoard from "./TaskBoard";
import Footer from "../shared/Footer";

export default function TaskBoardLayout() {
  return (
    <>
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}
