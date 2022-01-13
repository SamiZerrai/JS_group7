export const ucfirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const capitalize = (str) => {
  return str.split(" ").map(ucfirst).join(" ");
};

export const foo = 4;

export default {};
