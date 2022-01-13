const lib = require("./cjs_library.js");
const lib2 = require("./cjs_library.js");

console.log(lib.capitalize("hello world"));
console.log(lib.foo);
console.log(lib.ucfirst("hello"));
console.log(lib.default === lib2.default);
