import {IBuildOptions} from "./types/config";
import webpackDevServer from 'webpack-dev-server'

function buildDevServer(options: IBuildOptions): webpackDevServer.Configuration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
    }
}

export default buildDevServer;
