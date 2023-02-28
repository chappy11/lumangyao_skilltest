import { Routes } from "./Routes.enum";

export type RoutesType = {
  name: string;
  path: Routes;
  to: () => void;
};
