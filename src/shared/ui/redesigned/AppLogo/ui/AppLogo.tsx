import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { HStack } from '../../Stack';
import Logo from '@/shared/assets/icons/deprecated/logo-icon.svg';
import Icon from '../../Icon';

interface IAppLogoProps {
    className?: string;
    size?: number;
    withShadow?: boolean;
}

const AppLogo: React.FC<IAppLogoProps> = memo(
    ({
        className,
        withShadow = true,
        size = 50,
    }: IAppLogoProps): JSX.Element => {
        return (
            <HStack
                max
                justify={'center'}
                className={classNames(cls.appLogoWrapper, {}, [className])}
            >
                {withShadow && <div className={cls.gradientBig} />}
                <div className={cls.gradientSmall} />
                <Icon
                    width={size}
                    height={size}
                    color={'black'}
                    className={cls.appLogo}
                    Svg={Logo}
                />
            </HStack>
        );
    },
);

export default AppLogo;
