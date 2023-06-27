import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {IBuildOptions} from "./types/config";

export function buildLoaders({isDev}: IBuildOptions): webpack.RuleSetRule[] {
    const TSLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const SVGLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const FileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const CSSLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => {
                            return resPath.includes('.module')
                        },
                        localIdentName: isDev ?
                            '[path][name]__[local]--[hash:base64:8]'
                            : '[hash:base64:8]'
                    },
                }
            },
            "sass-loader",
        ],
    }

    return [
        TSLoader, CSSLoader, SVGLoader, FileLoader
    ]
}
