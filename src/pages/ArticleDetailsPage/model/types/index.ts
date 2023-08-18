import IArticleDetailsCommentsSchema from '../types/IArticleDetailsCommentsSchema';
import IArticleDetailsRecommendationsSchema from '../types/IArticleDetailsRecommendationsSchema';

interface IArticleDetailsPageSchema {
    comments: IArticleDetailsCommentsSchema;
    recommendations: IArticleDetailsRecommendationsSchema;
}

export default IArticleDetailsPageSchema;
