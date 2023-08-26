import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { HStack } from '../../../deprecated/Stack';
import Logo from '@/shared/assets/icons/deprecated/logo-icon.svg';
import Icon from '../../Icon';

interface IAppLogoProps {
    className?: string;
    size?: number;
}

const AppLogo: React.FC<IAppLogoProps> = memo(
    ({ className, size = 50 }: IAppLogoProps): JSX.Element => {
        return (
            <HStack
                max
                justify={'center'}
                className={classNames(cls.appLogoWrapper, {}, [className])}
            >
                <div className={cls.gradientBig} />
                <div className={cls.gradientBig} />
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
