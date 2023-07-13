type BuildMode = 'production' | 'development';

interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

interface IBuildOptions {
    mode: BuildMode;
    paths: IBuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
}

interface IBuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

export type {BuildMode};
export {IBuildPaths, IBuildOptions, IBuildEnv};

