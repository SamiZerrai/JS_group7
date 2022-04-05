import { MiniReact } from "../core/index.js";
import { Title } from "./Title.js";

export class ListDogs extends MiniReact.Component {
  constructor(properties) {
    super(properties);
  }

  render = () => {
    return MiniReact.createElement("ul", { id: "listDogs" }, [
      MiniReact.createElement("li", { class: "dog" }, "Labrador"),
      MiniReact.createElement("li", { class: "dog" }, "Saint Bernard"),
      MiniReact.createElement("li", { class: "dog" }, "Yorkshire"),
    ]);
  };
}
