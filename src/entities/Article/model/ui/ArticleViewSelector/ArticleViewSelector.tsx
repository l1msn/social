import React, {JSX, memo, useCallback} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import ArticleView from '../../types/ArticleView';
import ShelfViewIcon from 'shared/assets/icons/shelf-view-icon.svg';
import ListViewIcon from 'shared/assets/icons/list-view-icon.svg';
import Button from 'shared/ui/Button';
import Icon from 'widgets/Icon';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';

interface IArticleViewSelectorProps {
    className?: string
    view: ArticleView,
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SHELF,
        icon: ShelfViewIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListViewIcon,
    },
];

const ArticleViewSelector: React.FC<IArticleViewSelectorProps> = memo(({className, view, onViewClick}: IArticleViewSelectorProps): JSX.Element => {
    const onClick = useCallback((newView: ArticleView) => {
        return () => {
            onViewClick?.(newView);
        };
    }, [onViewClick]);

    function toggleView() {
        return;
    }

    return (
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button key={viewType.view} theme={ThemeButton.OUTLINE} onClick={onClick(viewType.view)}>
                    <Icon Svg={viewType.icon} className={classNames('', {[cls.notSelected]: viewType.view !== view})}/>
                </Button>
            ))}
        </div>
    );
});

export default ArticleViewSelector;


