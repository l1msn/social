import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';

interface IStickyContentLayoutProps {
    className?: string;
    left?: React.ReactElement;
    content: React.ReactElement;
    right?: React.ReactElement;
}

const StickyContentLayout: React.FC<IStickyContentLayoutProps> = (
    props: IStickyContentLayoutProps,
): JSX.Element => {
    const { className, left, content, right } = props;

    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            {right && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {left && <div className={cls.right}>{right}</div>}
        </div>
    );
};

export default StickyContentLayout;
