type BuildMode = 'production' | 'development';

interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
}

interface IBuildOptions {
    mode: BuildMode;
    paths: IBuildPaths;
    isDev: boolean;
}

export type { BuildMode };
export { IBuildPaths, IBuildOptions};

