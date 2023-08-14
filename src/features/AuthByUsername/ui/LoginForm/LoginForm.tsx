import React, {JSX, memo, useCallback} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {useTranslation} from 'react-i18next';
import Button from '@/shared/ui/Button';
import {Input} from '@/shared/ui/Input';
import ThemeButton from '@/shared/ui/Button/consts/ThemeButton';
import {useSelector} from 'react-redux';
import {loginActions, loginReducer} from '../../model/slice/loginSlice';
import loginByUsername from '../../services/loginByUsername/loginByUsername';
import ThemeText from '@/shared/ui/Text/consts/ThemeText';
import {Text} from '@/shared/ui/Text';
import LoginSelectors from '../../model/selectors/LoginSelectors';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

interface ILoginFormProps {
    className?: string,
    onSuccess: () => void;
}


const LoginForm: React.FC<ILoginFormProps> = memo(({className, onSuccess}: ILoginFormProps): JSX.Element => {
    const {t} = useTranslation('auth');
    const dispatch = useAppDispatch();

    const username = useSelector(LoginSelectors.getLoginUsername);
    const password = useSelector(LoginSelectors.getLoginPassword);
    const isLoading = useSelector(LoginSelectors.getLoginIsLoading);
    const error = useSelector(LoginSelectors.getLoginError);


    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({username: username, password: password}));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <DynamicModuleLoader removeAfterAmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Auth')} />
                {error && <Text text={t('Invalid username or password')} theme={ThemeText.ERROR} />}
                <Input onChange={onChangeUsername} value={username} autofocus placeholder={t('Username')} type="text" className={cls.input}/>
                <Input type="password" onChange={onChangePassword} value={password} placeholder={t('Password')} className={cls.input}/>
                <Button disabled={isLoading} onClick={onLoginClick} theme={ThemeButton.WITHLINE} className={cls.loginBtn}>
                    {t('Login')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;

