import {IStateSchema} from '@/app/providers/StoreProvider';

const getArticleIsLoading = (state: IStateSchema) => state?.article?.isLoading || false;

export default getArticleIsLoading;
