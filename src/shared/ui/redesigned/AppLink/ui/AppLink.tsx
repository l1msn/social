import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { LinkProps, NavLink } from 'react-router-dom';
import AppLinkVariant from '../consts/AppLinkVariant';
import TestProps from '@/shared/types/tests';

interface IAppLinkProps extends LinkProps, TestProps {
    className?: string;
    variant?: AppLinkVariant;
    children?: React.ReactNode;
    activeClassName?: string;
}

const AppLink: React.FC<IAppLinkProps> = memo(
    (props: IAppLinkProps): JSX.Element => {
        const {
            to,
            className,
            children,
            variant = 'primary',
            activeClassName = '',
            ...otherProps
        } = props;

        return (
            <NavLink
                {...otherProps}
                to={to}
                className={({ isActive }) =>
                    classNames(cls.appLink, { [activeClassName]: isActive }, [
                        className,
                        cls[variant],
                    ])
                }
            >
                {children}
            </NavLink>
        );
    },
);

export default AppLink;
