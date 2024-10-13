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

  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearch = (event) => {
    const value = event.target.value.trim();
    setSearchTerm(value);
  };

  const displayedTasks = tasks.filter((task) => {
   return task.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        handleSearch={handleSearch}
        searchTerm={searchTerm}
      />
      <div className="flex-grow flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
        <TaskBoard
          allTasks={tasks}
          setTasks={setTasks}
          tasks={displayedTasks}
          searchTerm={searchTerm}
        />
      </div>
      <Footer />
    </>
  );
}
