import { Component } from "./component.js";

function aElement(element , properties , children) {
    if (element.isClass()) {
        const component = new element(properties);
        return component.render();
    } else {
        return aElement;
    }
}

// Parameters , can represent an inf number of arguments (array)
export const createElement = (element, properties, ...children) => {
    return anElement(element, properties, children);
  };
  
  // Expose the class
  export const MiniReact = {
    createElement,
    Component
  };

  // Expose render methode
export const MiniReactDOM = {
    render: (element, domElement, properties = {}) => {
      var prevChild = null;
      var el = new element(properties);
      var prevChild = el.display();
  
      el.componentDidUpdate = () => {
        var child = el.display();
        domElement.replaceChild(child, prevChild);
        prevChild = child;
      };
      domElement.appendChild(prevChild);
    }
  };