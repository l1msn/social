import webpack from 'webpack';
import {IBuildOptions} from './types/config';
import BuildCSSLoader from './loaders/buildCSSLoader';

export function buildLoaders({isDev}: IBuildOptions): webpack.RuleSetRule[] {
    const TSLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const SVGLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        loader: '@svgr/webpack',
    };

    const FileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const BabelLoader: webpack.RuleSetRule = {
        test: /\.(tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env']],
            },
        },
    };

    const CSSLoader = BuildCSSLoader(isDev);

    return [
        FileLoader, SVGLoader, BabelLoader, TSLoader, CSSLoader,
    ];
}
