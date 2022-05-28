import "styled-components";
import { StringLiteralLike } from "typescript";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
