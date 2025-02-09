import { useRoutes } from "react-router";
import { routes } from "./constants";

export const App = () => {
  const router = useRoutes(routes);

  return <>{router}</>;
};
