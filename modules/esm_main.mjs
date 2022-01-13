import { capitalize, foo, ucfirst, default as VarObj } from "./esm_library.mjs";
import VarObj2 from "./esm_library.mjs";

console.log(capitalize("hello world"));
console.log(foo);
console.log(ucfirst("hello"));
console.log(VarObj === VarObj2);
