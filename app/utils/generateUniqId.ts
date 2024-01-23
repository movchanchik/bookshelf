export const generateUniqueId = () => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000);
  const id = parseInt(`${timestamp}${random}`, 10);
  return id;
};
