import ArticlesPageSelectors from './model/selectors/ArticlesPageSelectors';
import { articlesPageReducer } from './model/slice/articlesPageSlice';
import IArticlesPageSchema from './model/types/IArticlesPageSchema';
import ArticlesPageLazy from './ui/ArticlesPage/ArticlesPage.lazy';

export { ArticlesPageLazy as ArticlesPage };
export type { IArticlesPageSchema };
export { articlesPageReducer, ArticlesPageSelectors };
