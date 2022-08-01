import { ThemedCssFunction } from "styled-components";
// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    imports?: ThemedCssFunction;
    fonts?: {
      size?: {
        base?: number;
      };
      family?: {
        sans?: string;
      };
    };
    colors?: any;
  }
}
