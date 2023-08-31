import React, { JSX } from 'react';
import ArticlesFilters from '@/widgets/ArticlesFilters';
import useArticlesFilters from '../../lib/hooks/useArticlesFilters';

interface IFiltersContainerProps {
    className?: string;
}

const FiltersContainer: React.FC<IFiltersContainerProps> = ({
    className,
}: IFiltersContainerProps): JSX.Element => {
    const {
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
        order,
        search,
        sort,
        type,
    } = useArticlesFilters();

    return (
        <ArticlesFilters
            order={order}
            sort={sort}
            type={type}
            search={search}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            onChangeType={onChangeType}
            onChangeSearch={onChangeSearch}
            className={className}
        />
    );
};

export default FiltersContainer;
