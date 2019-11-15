import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./presentation/app/App";
import theme from "./presentation/theme";
import * as DependenciesProvider from "./di/DependenciesProvider";

const cartPresenter = DependenciesProvider.provideCartPresenter();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App cartPresenter={cartPresenter} />
  </ThemeProvider>,
  document.querySelector("#root")
);
