import React, { JSX } from 'react';
import ArticlesFilters from '@/widgets/ArticlesFilters';
import useArticlesFilters from '../../lib/hooks/useArticlesFilters';

interface IFiltersContainerProps {
    className?: string;
}

const FiltersContainer: React.FC<IFiltersContainerProps> = ({
    className,
}: IFiltersContainerProps): JSX.Element => {
    return <ArticlesFilters {...useArticlesFilters()} className={className} />;
};

export default FiltersContainer;
