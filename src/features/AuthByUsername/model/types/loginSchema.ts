interface ILoginSchema {
    username: string,
    password: string,
    isLoading: boolean,
    error?: string;
}

export default ILoginSchema;
