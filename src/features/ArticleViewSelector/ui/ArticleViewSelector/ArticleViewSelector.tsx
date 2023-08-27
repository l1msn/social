import React, { JSX, memo, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import ShelfViewIconDeprecated from '@/shared/assets/icons/deprecated/shelf-view-icon.svg';
import ListViewIconDeprecated from '@/shared/assets/icons/deprecated/list-view-icon.svg';
import ShelfViewIcon from '@/shared/assets/icons/redesigned/tile.svg';
import ListViewIcon from '@/shared/assets/icons/redesigned/burger.svg';
import { default as DeprecatedButton } from '@/shared/ui/deprecated/Button';
import { default as DeprecatedIcon } from '@/shared/ui/deprecated/Icon';
import ThemeButton from '@/shared/ui/deprecated/Button/consts/ThemeButton';
import { ArticleView } from '@/entities/Article';
import { toggleFeatures, ToggleFeatures } from '@/shared/features';
import Icon from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';

interface IArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SHELF,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            off: () => ShelfViewIconDeprecated,
            on: () => ShelfViewIcon,
        }),
    },
    {
        view: ArticleView.LIST,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            off: () => ListViewIconDeprecated,
            on: () => ListViewIcon,
        }),
    },
];

const ArticleViewSelector: React.FC<IArticleViewSelectorProps> = memo(
    ({
        className,
        view,
        onViewClick,
    }: IArticleViewSelectorProps): JSX.Element => {
        const onToggleView = useCallback(
            (newView: ArticleView) => {
                return () => {
                    onViewClick?.(newView);
                };
            },
            [onViewClick],
        );

        const DeprecatedArticleViewSelector = (
            <div
                className={classNames(cls.articleViewSelector, {}, [className])}
            >
                {viewTypes.map((viewType) => (
                    <DeprecatedButton
                        key={viewType.view}
                        theme={ThemeButton.CLEAR}
                        onClick={onToggleView(viewType.view)}
                    >
                        <DeprecatedIcon
                            Svg={viewType.icon}
                            className={classNames('', {
                                [cls.notSelected]: viewType.view !== view,
                            })}
                        />
                    </DeprecatedButton>
                ))}
            </div>
        );

        const RedesignedArticleViewSelector = (
            <Card
                className={classNames(cls.articleViewSelectorRedesigned, {}, [
                    className,
                ])}
            >
                {viewTypes.map((viewType) => (
                    <Icon
                        key={viewType.view}
                        Svg={viewType.icon}
                        className={classNames('', {
                            [cls.notSelected]: viewType.view !== view,
                        })}
                        clickable
                        onClick={onToggleView(viewType.view)}
                    />
                ))}
            </Card>
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={RedesignedArticleViewSelector}
                off={DeprecatedArticleViewSelector}
            />
        );
    },
);

export default ArticleViewSelector;
