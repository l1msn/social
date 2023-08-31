import React, { JSX, memo, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { default as DeprecatedButton } from '@/shared/ui/deprecated/Button';
import { Input as DeprecatedInput } from '@/shared/ui/deprecated/Input';
import ThemeButton from '@/shared/ui/deprecated/Button/consts/ThemeButton';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import loginByUsername from '../../services/loginByUsername/loginByUsername';
import ThemeText from '@/shared/ui/deprecated/Text/consts/ThemeText';
import { Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import LoginSelectors from '../../model/selectors/LoginSelectors';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import useCallbackButton from '@/shared/lib/hooks/useCallbackButton/useCallbackButton';
import { ToggleFeatures } from '@/shared/features';
import { Text } from '@/shared/ui/redesigned/Text';
import Button from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { useUpdate } from '@/shared/lib/render/forceUpdate/forceUpdate';

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

interface ILoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const LoginForm: React.FC<ILoginFormProps> = memo(
    ({ className, onSuccess }: ILoginFormProps): JSX.Element => {
        const { t } = useTranslation('auth');
        const dispatch = useAppDispatch();

        const username = useSelector(LoginSelectors.getLoginUsername);
        const password = useSelector(LoginSelectors.getLoginPassword);
        const isLoading = useSelector(LoginSelectors.getLoginIsLoading);
        const error = useSelector(LoginSelectors.getLoginError);

        const forceUpdate = useUpdate();

        const onChangeUsername = useCallback(
            (value: string) => {
                dispatch(loginActions.setUsername(value));
            },
            [dispatch],
        );

        const onChangePassword = useCallback(
            (value: string) => {
                dispatch(loginActions.setPassword(value));
            },
            [dispatch],
        );

        const onLoginClick = useCallback(async () => {
            const result = await dispatch(
                loginByUsername({ username: username, password: password }),
            );
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess();
                forceUpdate();
            }
        }, [dispatch, username, password, onSuccess, forceUpdate]);

        const onLoginClickWithEnterConfirm = useCallbackButton(
            onLoginClick,
            'Enter',
        );

        const DeprecatedLoginForm = (
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <DeprecatedText title={t('Auth')} />
                {error && (
                    <DeprecatedText
                        text={t('Invalid username or password')}
                        theme={ThemeText.ERROR}
                    />
                )}
                <DeprecatedInput
                    onChange={onChangeUsername}
                    value={username}
                    autofocus
                    placeholder={t('Username')}
                    type="text"
                    className={cls.input}
                />
                <DeprecatedInput
                    type="password"
                    onChange={onChangePassword}
                    value={password}
                    placeholder={t('Password')}
                    className={cls.input}
                />
                <DeprecatedButton
                    disabled={isLoading}
                    onKeyDown={(keyboardEvent) => onLoginClickWithEnterConfirm}
                    onClick={onLoginClick}
                    theme={ThemeButton.WITHLINE}
                    className={cls.loginBtn}
                    type={'submit'}
                >
                    {t('Login')}
                </DeprecatedButton>
            </div>
        );

        const RedesignedLoginForm = (
            <div
                className={classNames(cls.LoginFormRedesigned, {}, [className])}
            >
                <Text title={t('Auth')} />
                {error && (
                    <Text
                        text={t('Invalid username or password')}
                        variant={'error'}
                    />
                )}
                <Input
                    onChange={onChangeUsername}
                    value={username}
                    autofocus
                    placeholder={t('Username - Write: "Alex"')}
                    type="text"
                    className={cls.input}
                />
                <Input
                    type="password"
                    onChange={onChangePassword}
                    value={password}
                    placeholder={t('Password - Write: "password"')}
                    className={cls.input}
                />
                <Button
                    disabled={isLoading}
                    onKeyDown={(keyboardEvent) => onLoginClickWithEnterConfirm}
                    onClick={onLoginClick}
                    variant={'outline'}
                    className={cls.loginBtn}
                    type={'submit'}
                >
                    {t('Login')}
                </Button>
            </div>
        );

        return (
            <DynamicModuleLoader removeAfterAmount reducers={initialReducers}>
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={RedesignedLoginForm}
                    off={DeprecatedLoginForm}
                />
            </DynamicModuleLoader>
        );
    },
);

export default LoginForm;
