import React, {JSX, memo, useMemo} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface IAvatarProps {
    className?: string,
    src?: string,
    size?: number;
    alt?: string
}

const Avatar: React.FC<IAvatarProps> = memo(({className, src, size, alt}: IAvatarProps): JSX.Element => {
    const styles = useMemo<React.CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100,
        };
    }, [size]);

    return (
        <img src={src} style={styles} alt={alt} className={classNames(cls.Avatar, {}, [className])}/>
    );
});

export default Avatar;


