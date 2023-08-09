import {IStateSchema} from '@/app/providers/StoreProvider';


const getArticleData = (state: IStateSchema) => state?.article?.data;

export default getArticleData;
