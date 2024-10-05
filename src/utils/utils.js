export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("tasks");
  return JSON.parse(data) || [];
};
