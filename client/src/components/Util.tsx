// Utilities shared between components
import { ReactNode } from "react";

export type Colour = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";

export interface IComponent{
  children: ReactNode;
}
