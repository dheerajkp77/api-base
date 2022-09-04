export const getToken = () => {
  return JSON.parse(localStorage.getItem("token"));
};

export const clearSession = () => {
  localStorage.removeItem("token");
};
