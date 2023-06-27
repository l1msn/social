import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import {Link, LinkProps} from 'react-router-dom';
import AppLinkThemes from 'shared/ui/AppLink/consts/AppLinkThemes';

interface IAppLinkProps extends LinkProps{
    className?: string;
    children?: React.ReactNode;
    theme?: AppLinkThemes
}

const AppLink: React.FC<IAppLinkProps> = (props): JSX.Element => {
    const {to, className, children, theme = AppLinkThemes.PRIMARY} = props;

    return (
        <Link to={to} className={classNames(cls.applink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};

export default AppLink;
