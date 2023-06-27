import webpackDevServer from 'webpack-dev-server'
import {IBuildOptions} from "./types/config";

function buildDevServer(options: IBuildOptions): webpackDevServer.Configuration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}

export default buildDevServer;
