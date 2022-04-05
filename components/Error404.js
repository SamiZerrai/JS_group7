import { MiniReact } from "../core/index.js";

export class Error404 extends MiniReact.Component {
  constructor(properties) {
    super(properties);
  }

  render = () => {
    return MiniReact.createElement("h1", { id: "my-id" }, [MiniReact.createElement("span", null, "Erreur 404")]);
  };
}
