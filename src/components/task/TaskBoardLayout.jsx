import Header from "../shared/Header";
import TaskBoard from "./TaskBoard";
import Footer from "../shared/Footer";
import { useState } from "react";

export default function TaskBoardLayout() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Complete React Project",
    description: "Finish the project and submit it by the end of the week.",
    tags: ["React", "Project", "Deadline"],
    priority: "High",
    isFavorite: false,
  };

  const [tasks, setTasks] = useState([defaultTask]);

  return (
    <>
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
        <TaskBoard tasks={tasks} setTasks={setTasks} />
      </div>
      <Footer />
    </>
  );
}
