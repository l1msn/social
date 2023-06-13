import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import path from "path";
import {IBuildEnv, IBuildPaths} from "./config/build/types/config";

function config(env: IBuildEnv): webpack.Configuration {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const port = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port
    })

    return config;
}

export default config;
