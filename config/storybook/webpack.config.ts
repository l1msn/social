import webpack, {RuleSetRule} from 'webpack';
import {IBuildPaths} from '../build/types/config';
import path from 'path';
import buildCSSLoader from '../build/loaders/buildCSSLoader';

function webpackConfigStorybook({config}: {config: webpack.Configuration}) {
    const paths: IBuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };


    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx', '.svg');

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg$/};
        }
        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        loader: '@svgr/webpack',
    });
    config.module.rules.push(buildCSSLoader(true));

    return config;
}


export default webpackConfigStorybook;
