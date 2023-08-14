import {IStateSchema} from '@/app/providers/StoreProvider';

class LoginSelectors {
    static getLoginError = (state: IStateSchema) => state?.loginForm?.error || '';
    static getLoginIsLoading = (state: IStateSchema) => state?.loginForm?.isLoading || false;
    static getLoginPassword = (state: IStateSchema) => state?.loginForm?.password || '';
    static getLoginState = (state: IStateSchema) => state?.loginForm;
    static getLoginUsername = (state: IStateSchema) => state?.loginForm?.username || '';
}

export default LoginSelectors;
