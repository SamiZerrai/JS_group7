import { Router, Route } from "./core/routing.js";

export const router = new Router("Router", [new Route("Home", "home", "/"), new Route("Chiens", "dogs", "/dogs")]);

export const currentRoute = router.routes.filter(function (route) {
  return route.path === window.location.pathname;
})[0];
