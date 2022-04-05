import { MiniReact } from "../core/index.js";

export class Navbar extends MiniReact.Component {
  constructor(properties) {
    super(properties);
    this.routes = properties.router.routes;
    this.selectedLink = window.location.pathname;
  }

  render = () => {
    console.log("selected link :");
    console.log(this.selectedLink);

    const routeHome = this.routes.filter(function (r) {
      return r.id === "home";
    })[0];
    const routeDogs = this.routes.filter(function (r) {
      return r.id === "dogs";
    })[0];

    return MiniReact.createElement("ul", null, [
      MiniReact.createElement("li", null, 
        MiniReact.createElement("a", { href: `.${routeHome.path}` }, 
          routeHome.name
        )
      ),
      MiniReact.createElement("li", null, 
        MiniReact.createElement("a", { href: `.${routeDogs.path}` }, 
          routeDogs.name
        )
      ),
    ]);

  };
}
