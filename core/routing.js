export class Router {
  constructor(name, routes) {
    this.name = name;
    this.routes = routes;
  }
}

export class Route {
  constructor(name, id, path, className) {
    this.name = name;
    this.id = id;
    this.path = path;
  }
}
