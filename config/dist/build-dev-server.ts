import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

export const buildDevServer = (options:BuildOptions):DevServerConfiguration => {
  const ff = {
    port: options.port,
    open: true,
    hot: true,
    historyApiFallback: true,
  }


  return ff
}