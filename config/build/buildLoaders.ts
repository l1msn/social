import webpack from 'webpack';
import {IBuildOptions} from './types/config';
import BuildCSSLoader from './loaders/buildCSSLoader';
import buildBabelLoader from './loaders/buildBabelLoader';

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
    // const TSLoader: webpack.RuleSetRule = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

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

    const codeBabelLoader = buildBabelLoader({...options, isTsx: false});
    const tsxCodeBabelLoader = buildBabelLoader({...options, isTsx: true});

    const CSSLoader = BuildCSSLoader(options.isDev);

    return [
        FileLoader, SVGLoader, tsxCodeBabelLoader, codeBabelLoader, CSSLoader,
    ];
}
