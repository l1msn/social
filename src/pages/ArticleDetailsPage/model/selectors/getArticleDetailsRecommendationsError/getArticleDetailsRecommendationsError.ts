import {IStateSchema} from '@/app/providers/StoreProvider';


const getArticleDetailsRecommendationsError = (state: IStateSchema) => state?.articleDetailsPage?.recommendations?.error || '';

export default getArticleDetailsRecommendationsError;
