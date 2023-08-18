import webpack from 'webpack';
import path from 'path';
import {IBuildEnv, IBuildPaths} from './config/build/types/config';
import {buildWebpackConfig} from './config/build/buildWebpackConfig';

function config(env: IBuildEnv): webpack.Configuration {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'dist', 'locales'),
    };

    const mode = env?.mode || 'development';
    const isDev = mode === 'development';
    const port = env?.port || 3000;
    const apiUrl = env?.apiUrl || 'http://localhost:8000';

    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode,
        paths: paths,
        isDev: isDev,
        port: port,
        apiUrl: apiUrl,
        project: 'frontend',
    });

    return config;
}

export default config;
