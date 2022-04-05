import { MiniReact } from "../core/index.js";

export class Title extends MiniReact.Component {
    constructor(properties) {
        super(properties);
    }

    render = () => {
        return MiniReact.createElement("h1", 
        { id: "my-id" }, 
        [
            MiniReact.createElement('span', { props: { prenom: 'Romain', greeting: "comment va ?" }}, 'Hello {{ prenom }} {{ greeting }}'),
            MiniReact.createElement('ul', null, 
                    [MiniReact.createElement('li', null, "Labrador"), MiniReact.createElement('li', null, "Saint Bernard")])
        ]
        );
    };
}
