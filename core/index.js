import Component from "./component.js";
import { type_check, type_check_v1 } from "./utils.js";

export const MiniReact = {
	Component: Component,

	render: (componentClass, domElement, properties = {}) => {
		let prevChild = null;
		const component = new componentClass(properties);
		prevChild = component.display();

		// TODO : Renseinger la nouvelle did update dans le composant plus tard

		domElement.appendChild(prevChild);
	},

	createElement: function(element, properties, childrens) {

		if (element.isClass()) {  // call other component

			const component = new element(properties);
			return component.render();

		} else {  // create element
			const node = document.createElement(element);

			if (childrens) {

				if (!type_check_v1(childrens, 'array')) {

					let child = childrens;
					if (typeof child === "string") {

						if (properties && properties.prop_access('props')) node.appendChild(document.createTextNode(child.interpolate(properties)));
						else node.appendChild(document.createTextNode(child));

					} else {
						node.appendChild(child);
					}

				} else {
					childrens.forEach(child => {
						//   if (child === undefined) continue;
						if (typeof child === "string") {

							if (properties && properties.prop_access('props')) node.appendChild(document.createTextNode(child.interpolate(properties)));
							else node.appendChild(document.createTextNode(child));

						} else {
							node.appendChild(child);
						}
					});
				}
			}
			if (properties) {
				Object.keys(properties).forEach((propertyName) => {
					if (propertyName !== "props") {
						if (/on([A-Z].*)/.test(propertyName)) {
							const eventName = propertyName.match(/on([A-Z].*)/)[1].toLowerCase();
							node.addEventListener(eventName, properties[propertyName]);
						} else {
							node.setAttribute(propertyName, properties[propertyName]);
						}
					}
				});
			}

			return node;
		}
	},
};