import React, {JSX, memo, useCallback} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {useTranslation} from 'react-i18next';
import Button from 'shared/ui/Button';
import {Input} from 'shared/ui/Input';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import {useSelector} from 'react-redux';
import {loginActions, loginReducer} from '../../model/slice/loginSlice';
import {loginByUsername} from 'features/AuthByUsername';
import ThemeText from 'shared/ui/Text/consts/ThemeText';
import {Text} from 'shared/ui/Text';
import ILoginFormProps from './types/ILoginFormProps';
import getLoginUsername from '../../model/selectors/getLoginUsername/getLoginUsername';
import getLoginPassword from '../../model/selectors/getLoginPassword/getLoginPassword';
import getLoginError from '../../model/selectors/getLoginError/getLoginError';
import getLoginIsLoading from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};


const LoginForm: React.FC<ILoginFormProps> = memo(({className, onSuccess}: ILoginFormProps): JSX.Element => {
    const {t} = useTranslation('auth');
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);


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
                <Input onChange={onChangePassword} value={password} placeholder={t('Password')} type="text" className={cls.input}/>
                <Button disabled={isLoading} onClick={onLoginClick} theme={ThemeButton.WITHLINE} className={cls.loginBtn}>
                    {t('Login')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;

