import React, {JSX, memo, useCallback} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {useTranslation} from 'react-i18next';
import Button from 'shared/ui/Button';
import {Input} from 'shared/ui/Input';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import {useDispatch, useSelector} from 'react-redux';
import {loginActions} from '../../model/slice/loginSlice';
import {getLoginState, loginByUsername} from 'features/AuthByUsername';
import {AppDispatch} from 'app/providers/StoreProvider/config/store';
import ThemeText from 'shared/ui/Text/consts/ThemeText';
import {Text} from 'shared/ui/Text';

interface ILoginFormProps {
    className?: string
}

const LoginForm: React.FC<ILoginFormProps> = memo(({className}: ILoginFormProps): JSX.Element => {
    const {t} = useTranslation('auth');
    const dispatch = useDispatch<AppDispatch>();
    const {username, password, error, isLoading} = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Auth')} />
            {error && <Text text={t('Invalid username or password')} theme={ThemeText.ERROR} />}
            <Input onChange={onChangeUsername} value={username} autofocus placeholder={t('Username')} type="text" className={cls.input}/>
            <Input onChange={onChangePassword} value={password} placeholder={t('Password')} type="text" className={cls.input}/>
            <Button disabled={isLoading} onClick={onLoginClick} theme={ThemeButton.WITHLINE} className={cls.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
});

export default LoginForm;


