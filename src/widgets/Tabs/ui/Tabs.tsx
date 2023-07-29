import React, {JSX, useCallback} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import {Card} from 'widgets/Card';
import CardTheme from 'widgets/Card/consts/CardTheme';
import ITabItem from '../types/ITabItem';

interface ITabsProps {
    className?: string,
    tabs: ITabItem[],
    value: string,
    onTabClick: (tab: ITabItem) => void
}

const Tabs: React.FC<ITabsProps> = (props: ITabsProps): JSX.Element => {
    const {className, onTabClick, tabs, value} = props;

    const onClickHandle = useCallback((tab: ITabItem) => {
        return () => {
            onTabClick(tab);
        };
    }, [onTabClick]);

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card onClick={onClickHandle(tab)} theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
                    className={cls.tab} key={tab.value}>
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};

export default Tabs;


