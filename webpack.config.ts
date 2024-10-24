import path from "path";
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/dist";
import {BuildEnv, BuildPath} from "./config/dist/types/config";


export default (env: BuildEnv) => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env.port || 3000

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })


    return config
}
