export const pagination = (items, page, setCurrentItems) => {
  const pageSize = 15;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = items.slice(startIndex, endIndex);
  setCurrentItems(currentItems);
};
