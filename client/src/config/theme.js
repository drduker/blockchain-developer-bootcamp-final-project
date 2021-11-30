import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#3989c7",
    },
    secondary: {
      main: "#5DE23C",
    },
    error: {
      main: "#d81010",
    },
  },
  props: {
    MuiButton: {
      variant: "outlined",
      color: "secondary",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
        },
        "#root": {
          height: "100%",
        },
      },
    },
  },
});

export default theme;
