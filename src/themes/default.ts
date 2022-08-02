import { DefaultTheme, css } from "styled-components";

const Theme: DefaultTheme = {
  imports: css`
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@600;700;800;900&display=swap");
  `,
  fonts: {
    size: {
      base: 16,
    },
    family: {
      sans: "Inter, sans-serif",
    },
  },
  colors: {
    background: {
      background: "#F7F8FA",
    },
    primary: {
      100: "",
      500: "#3B82F6",
      600: "",
      opacity: {
        10: "#E4ECFA",
      },
    },
    gray: {
      10: "rgb(13, 17, 26, 255)",
      20: "rgb(26, 34, 51, 255)",
      30: "rgb(38, 51, 77, 255)",
      50: "#EBEEF2",
      60: "#E9EBF0",
      100: "",
      150: "",
      200: "#B8BFCC",
      300: "#98A2B3",
      400: "",
      500: "",
      700: "",
      800: "#1F2633",
    },
    green: {
      100: "",
      500: "",
      600: "",
      opacity: {
        10: "",
      },
    },
    pink: {
      600: "",
      opacity: {
        10: "",
      },
    },
    yellow: {
      600: "",
      opacity: {
        10: "",
      },
    },
    red: {
      50: "",
      500: "",
    },
    purple: {
      100: "",
      500: "",
      600: "",
      700: "",
      opacity: {
        10: "",
      },
    },
    sky: {
      500: "",
      600: "",
    },
    bronze: {
      500: "",
      600: "",
    },
    white: {
      white: "",
    },
  },
};

export default Theme;
