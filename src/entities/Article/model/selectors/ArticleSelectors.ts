import {IStateSchema} from '@/app/providers/StoreProvider';

class ArticleSelectors {
    static getArticleData = (state: IStateSchema) => state?.article?.data;
    static getArticleError = (state: IStateSchema) => state?.article?.error || '';
    static getArticleIsLoading = (state: IStateSchema) => state?.article?.isLoading || false;
}

export default ArticleSelectors;
