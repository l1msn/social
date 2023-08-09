import {IStateSchema} from '@/app/providers/StoreProvider';

const getArticleDetailsRecommendationsIsLoading = (state: IStateSchema) => state?.articleDetailsPage?.recommendations?.isLoading || false;

export default getArticleDetailsRecommendationsIsLoading;
