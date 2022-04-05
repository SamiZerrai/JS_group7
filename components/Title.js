import { MiniReact } from "../core/index.js";

export class Title extends MiniReact.Component {
    constructor(properties) {
        super(properties);
    }

    render = () => {
        return MiniReact.createElement("h1", null, "Hello");
    };
}
