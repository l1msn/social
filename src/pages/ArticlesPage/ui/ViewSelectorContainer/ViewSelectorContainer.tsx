import React, { JSX, memo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import useArticlesFilters from '../../lib/hooks/useArticlesFilters';

interface IViewSelectorContainerProps {
    className?: string;
}

const ViewSelectorContainer: React.FC<IViewSelectorContainerProps> = memo(
    ({ className }: IViewSelectorContainerProps): JSX.Element => {
        const { view, onChangeView } = useArticlesFilters();

        return (
            <ArticleViewSelector
                className={className}
                onViewClick={onChangeView}
                view={view}
            />
        );
    },
);

export default ViewSelectorContainer;
