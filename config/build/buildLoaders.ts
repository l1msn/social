import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    const TSLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        TSLoader,
    ]
}
