export const formatDate = () => {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString(); // Months are zero-indexed
  const year = now.getFullYear();

  return `${day}/${month}/${year}`;
};
