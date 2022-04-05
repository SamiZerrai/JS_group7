import Component from "./component";

export const MiniReact = {
    Component: Component,

    render: (componentClass, domElement, properties = {}) => {
        let prevChild = null;
        const component = new componentClass(properties);
        prevChild = component.display();

        // TODO : Renseinger la nouvelle did update dans le composant plus tard

        domElement.appendChild(prevChild);
    },

    createElement: (element, properties, childrens) => {
        
        if (element.isClass()) {
            const component = new element(properties);
            return component.render();

        } else {

            const node = document.createElement(element);

            if (childrens) {
                for (let child of childrens) {
                    if (child === undefined) continue;
                    if (typeof child === "string") {
                        node.appendChild(
                            document.createTextNode(child.interpolate(properties))
                        );
                    } else {
                        node.appendChild(child);
                    }
                }
            }  

            if (properties) {
                Object.keys(properties).forEach((propertyName) => {

                    if (/on([A-Z].*)/.test(propertyName)) {
                        const eventName = propertyName.match(/on([A-Z].*)/)[1].toLowerCase();
                        node.addEventListener(eventName, properties[propertyName]);
                    } else {
                        node.setAttribute(propertyName, properties[propertyName]);
                    }

                });
            }

            return node;
        }
    }

};