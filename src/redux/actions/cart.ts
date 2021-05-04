export const setTotalItemPrice = (payload: number) => {
  return { type: "SET:TOTALPRICE", payload: payload };
};
export const setTotalItemCount = (payload: number) => {
  return { type: "SET:TOTALCOUNT", payload: payload };
};
export const updateCart = (payload: any) => {
  console.log(payload);
  return { type: "UPDATE:CART:ITEMS", payload: payload };
};
