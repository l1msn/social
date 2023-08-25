import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';

interface IMainLayoutProps {
    className?: string;
    header: React.ReactElement;
    content: React.ReactElement;
    sidebar: React.ReactElement;
    toolbar?: React.ReactElement;
}

const MainLayout: React.FC<IMainLayoutProps> = (
    props: IMainLayoutProps,
): JSX.Element => {
    const { sidebar, content, toolbar, className, header } = props;
    return (
        <div className={classNames(cls.mainLayout, {}, [className])}>
            <div className={cls.content}>{content}</div>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
};

export default MainLayout;
