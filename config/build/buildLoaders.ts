import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    const TSLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const CSSLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ],
    }

    return [
        TSLoader, CSSLoader
    ]
}
