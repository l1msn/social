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
}

interface IBuildEnv {
    mode: BuildMode,
    port: number
}

export type { BuildMode };
export { IBuildPaths, IBuildOptions, IBuildEnv};

