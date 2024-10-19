import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoaders, buildPlugins, buildResolve} from "./index"
import {buildDevServer} from "./build-dev-server";

export const buildWebpackConfig = (option: BuildOptions): webpack.Configuration => {
    const {mode, paths, isDev} = option

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(option)
        },
        resolve: buildResolve(),
        plugins: buildPlugins(paths),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(option) : undefined,
    };
}