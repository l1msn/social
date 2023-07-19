import React from 'react';

const ArticleDetailsPageLazy = React.lazy(
    () => import('./ArticleDetailsPage'),
);

export default ArticleDetailsPageLazy;
