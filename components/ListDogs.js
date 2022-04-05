import { MiniReact } from "../core/index.js";
import { Title } from "./Title.js";

export class ListDogs extends MiniReact.Component {
    constructor(properties) {
        super(properties);
    }

    render = () => {
        return MiniReact.createElement(Title, null, null);
    };
}