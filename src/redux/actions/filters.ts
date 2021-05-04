export const setCategory = (payload: number | null) => {
  return { type: "SET:CATEGORY", payload: payload };
};
export const setSortBy = (payload: string) => {
  return { type: "SET:SORTBY", payload: payload };
};
