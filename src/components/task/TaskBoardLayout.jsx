import { useEffect, useState } from "react";
import Header from "../shared/Header";
import TaskBoard from "./TaskBoard";
import Footer from "../shared/Footer";
import { getDataFromLocalStorage } from "../../utils/utils";

export default function TaskBoardLayout() {
  const [tasks, setTasks] = useState(getDataFromLocalStorage());
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  // Theme state
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark" // Default to light theme
  );

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save the theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme; // Apply the theme to the <html> element
  }, [theme]);

  // Toggle between dark and light theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  function handleSearch(event) {
    const value = event.target.value;
    setSearchTerm(value);
  }

  // Filtered tasks based on the search term
  const displayedTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.priority.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        toggleTheme={toggleTheme}
        theme={theme}
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
