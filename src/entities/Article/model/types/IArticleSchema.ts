import {IArticle} from '../types/IArticle';

interface IArticleSchema {
    isLoading: boolean,
    error?: string,
    data?: IArticle
}

export default IArticleSchema;
