import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {useTranslation} from 'react-i18next';
import Button from 'shared/ui/Button';
import Input from 'shared/ui/Input';

interface ILoginFormProps {
    className?: string
}

const LoginForm: React.FC<ILoginFormProps> = ({className}: ILoginFormProps): JSX.Element => {
    const {t} = useTranslation('auth');
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autofocus placeholder={t('Username')} type="text" className={cls.input}/>
            <Input placeholder={t('Password')} type="text" className={cls.input}/>
            <Button className={cls.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
};

export default LoginForm;


