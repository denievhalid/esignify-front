import { createElement } from "react";
import { MainPage } from "../pages";
import { PublicLayout } from "../components/layout";

export enum Pages {
  Main = "/",
  Sign = "sign",
}

export const routes = [
  {
    path: Pages.Main,
    element: createElement(PublicLayout, {
      children: createElement(MainPage),
    }),
  },
  {
    path: Pages.Sign,
    element: createElement(PublicLayout, {
      children: createElement(MainPage),
    }),
  },
];
