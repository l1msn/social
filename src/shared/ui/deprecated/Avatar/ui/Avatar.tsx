import React, { JSX, memo, useMemo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import AppImage from '../../AppImage';
import Icon from '../../Icon';
import UserIcon from '@/shared/assets/icons/deprecated/user-icon.svg';
import Skeleton from '../../Skeleton';

interface IAvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackUInverted?: boolean;
}

/**
 * Устаревший\deprecated UI component, используй новый из папки redesigned
 * @deprecated
 */
const Avatar: React.FC<IAvatarProps> = memo(
    (props: IAvatarProps): JSX.Element => {
        const { className, src, size = 100, alt, fallbackUInverted } = props;

        const styles = useMemo<React.CSSProperties>(() => {
            return {
                width: size,
                height: size,
            };
        }, [size]);

        const fallback = (
            <Skeleton width={size} height={size} borderRadius={'50%'} />
        );
        const errorFallback = (
            <Icon
                inverted={fallbackUInverted}
                width={size}
                height={size}
                Svg={UserIcon}
            />
        );

        return (
            <AppImage
                fallback={fallback}
                errorFallback={errorFallback}
                src={src}
                style={styles}
                alt={alt}
                className={classNames(cls.Avatar, {}, [className])}
            />
        );
    },
);

export default Avatar;
