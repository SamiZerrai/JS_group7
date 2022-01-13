const ucfirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const capitalize = (str) => {
  return str.split(" ").map(ucfirst).join(" ");
};

const foo = 4;

const def = {};

module.exports = {
  ucfirst,
  capitalize,
  foo,
  def,
};
