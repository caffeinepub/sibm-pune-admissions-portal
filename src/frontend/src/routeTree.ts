import { createRootRoute, createRoute } from "@tanstack/react-router";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const resultRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/result/$appNumber",
  component: ResultPage,
});

export const routeTree = rootRoute.addChildren([indexRoute, resultRoute]);
