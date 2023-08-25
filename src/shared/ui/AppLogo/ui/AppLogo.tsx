import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { HStack } from '../../Stack';
import Logo from '@/shared/assets/icons/logo-icon.svg';

interface IAppLogoProps {
    className?: string;
}

const AppLogo: React.FC<IAppLogoProps> = memo(
    ({ className }: IAppLogoProps): JSX.Element => {
        return (
            <HStack
                max
                justify={'center'}
                className={classNames(cls.appLogoWrapper, {}, [className])}
            >
                <div className={cls.gradientBig} />
                <div className={cls.gradientBig} />
                <Logo className={cls.appLogo} />
            </HStack>
        );
    },
);

export default AppLogo;
