import Header from "../shared/Header";
import TaskBoard from "./TaskBoard";
import Footer from "../shared/Footer";
import { useEffect, useState } from "react";
import {
  getTasksFromLocalStorage,
  getThemesFromLocalStorage,
} from "../../utils/localStorage";

export default function TaskBoardLayout() {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage());
  const [theme, setTheme] = useState(getThemesFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <div className="flex-grow flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
        <TaskBoard tasks={tasks} setTasks={setTasks} />
      </div>
      <Footer />
    </>
  );
}
