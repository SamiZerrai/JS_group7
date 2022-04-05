import { Title } from "/components/Title.js";
import { ListDogs } from "/components/ListDogs.js";
import { MiniReact } from "/core/index.js";
import { prop_access, type_check } from "./core/utils.js";

// MiniReact.render(Title, document.getElementById("root"), {});
MiniReact.render(ListDogs, document.getElementById("root"), {});