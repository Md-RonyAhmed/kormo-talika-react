
export const getTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  return JSON.parse(tasks) || [];
};

export const getThemesFromLocalStorage = () => {
    const theme = localStorage.getItem("theme");
    return theme || "dark";
}