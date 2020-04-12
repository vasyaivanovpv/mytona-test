export const checkLocationType = (type, types) => {
  if (types.includes(type)) return type;
  return "Unknown";
};
