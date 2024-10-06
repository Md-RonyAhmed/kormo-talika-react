import Header from "../shared/Header";
import TaskBoard from "./TaskBoard";
import Footer from "../shared/Footer";
// import TaskModal from "./TaskModal";

export default function TaskBoardLayout() {
  // Static tasks list
  const tasks = [
    {
      id: 1,
      title: "Complete React Project",
      description: "Finish the project and submit it by the end of the week.",
      tags: ["React", "Project", "Deadline"],
      priority: "High",
      isFavorite: true,
    },
    {
      id: 2,
      title: "Prepare Presentation",
      description: "Prepare slides for the upcoming client meeting.",
      tags: ["Presentation", "Client"],
      priority: "Medium",
      isFavorite: false,
    },
    {
      id: 3,
      title: "Read JavaScript Book",
      description: "Finish reading the JavaScript book.",
      tags: ["JavaScript", "Book"],
      priority: "Low",
      isFavorite: false,
    },
  ];

  return (
    <>
      {/* Static header without dynamic theme toggle */}
      <Header />
      {/* <TaskModal/> */}
      {/* TaskBoard with static tasks */}
      <div className="flex-grow flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
        <TaskBoard tasks={tasks} />
      </div>
      {/* Static Footer */}
      <Footer />
    </>
  );
}
