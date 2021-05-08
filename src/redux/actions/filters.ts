export const setCategory = (payload: number | null) => {
  return { type: "SET:CATEGORY", payload: payload };
};
export const setSortBy = (payload: { name: string; type: string }) => {
  return { type: "SET:SORTBY", payload: payload };
};
