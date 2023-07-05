import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

function buildCSSLoader(isDev: boolean): webpack.RuleSetRule {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => {
                            return resPath.includes('.module');
                        },
                        localIdentName: isDev ?
                            '[path][name]__[local]--[hash:base64:8]' :
                            '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };
}

export default buildCSSLoader;
