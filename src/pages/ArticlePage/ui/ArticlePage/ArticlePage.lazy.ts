import React from 'react';

const ArticlePageLazy = React.lazy(
    () => import('./ArticlePage'),
);

export default ArticlePageLazy;
