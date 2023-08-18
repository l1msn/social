import React, { CSSProperties, JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface ISkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderRadius?: string;
}

const Skeleton: React.FC<ISkeletonProps> = (
    props: ISkeletonProps,
): JSX.Element => {
    const { className, height, width, borderRadius } = props;

    const styles: CSSProperties = { height, width, borderRadius };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
};

export default Skeleton;
