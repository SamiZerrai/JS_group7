import { Title } from "/components/Title.js";
import { ListDogs } from "/components/ListDogs.js";
import { Error404 } from "./components/Error404.js";
import { Navbar } from "./components/Navbar.js";

import { MiniReact } from "/core/index.js";
import { router, currentRoute } from "./router.js";

const rootElement = document.querySelector("#root");

MiniReact.render(Navbar, rootElement, { router });

switch (!currentRoute ? null : currentRoute.id) {
  case "home":
    MiniReact.render(Title, rootElement, {});
    break;

  case "dogs":
    MiniReact.render(ListDogs, rootElement, {});
    break;

  default:
    console.log("default");
    MiniReact.render(Error404, rootElement, {});
    break;
}
