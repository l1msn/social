import {IStateSchema} from 'app/providers/StoreProvider';
import {IArticle} from '../../types/IArticle';


const getArticleData = (state: IStateSchema) => state?.article?.data || {} as IArticle;

export default getArticleData;
