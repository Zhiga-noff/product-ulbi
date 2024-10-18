import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildPath} from "./types/config";

export const buildPlugins = ({html}: BuildPath): webpack.WebpackPluginInstance[] =>{
    return [
        new HTMLWebpackPlugin({
            template: html
        }),
        new webpack.ProgressPlugin()
    ]
}