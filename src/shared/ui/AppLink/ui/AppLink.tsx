import React, {JSX, memo} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import {Link, LinkProps} from 'react-router-dom';
import AppLinkThemes from '../consts/AppLinkThemes';

interface IAppLinkProps extends LinkProps{
    className?: string,
    theme?: AppLinkThemes,
    children?: React.ReactNode;
}

const AppLink: React.FC<IAppLinkProps> = memo((props: IAppLinkProps): JSX.Element => {
    const {to, className, children, theme = AppLinkThemes.PRIMARY, ...otherProps} = props;

    return (
        <Link {...otherProps} to={to} className={classNames(cls.applink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
});

export default AppLink;
