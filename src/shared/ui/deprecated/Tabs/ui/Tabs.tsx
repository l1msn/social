import React, { JSX, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import ITabItem from '../types/ITabItem';
import { Card, CardTheme } from '../../Card';

interface ITabsProps {
    className?: string;
    tabs: ITabItem[];
    value: string;
    onTabClick: (tab: ITabItem) => void;
}

/**
 * Устаревший\deprecated UI component, используй новый из папки redesigned
 * @deprecated
 */
const Tabs: React.FC<ITabsProps> = (props: ITabsProps): JSX.Element => {
    const { className, onTabClick, tabs, value } = props;

    const onClickHandle = useCallback(
        (tab: ITabItem) => {
            return () => {
                onTabClick(tab);
            };
        },
        [onTabClick],
    );

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    onClick={onClickHandle(tab)}
                    // theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
                    // className={cls.tab}
                    theme={CardTheme.NORMAL}
                    className={classNames(
                        cls.tab,
                        { [cls.selected]: tab.value === value },
                        [className],
                    )}
                    key={tab.value}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};

export default Tabs;
