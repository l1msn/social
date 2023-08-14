import {IStateSchema} from '@/app/providers/StoreProvider';
import ArticleDetailsSelectors from './ArticleDetailsSelectors';

describe('testing getArticleCommentsError functional', () => {
    test('return data', () => {
        const state: DeepPartial<IStateSchema> = {
            articleDetailsPage: {
                comments: {
                    error: 'error',
                },
            },
        };
        expect(ArticleDetailsSelectors.getArticleCommentsError(state as IStateSchema)).toEqual('error');
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(ArticleDetailsSelectors.getArticleCommentsError(state as IStateSchema)).toEqual('');
    });
});

describe('testing getArticleCommentsIsLoading functional', () => {
    test('return data', () => {
        const state: DeepPartial<IStateSchema> = {
            articleDetailsPage: {
                comments: {
                    isLoading: false,
                },
            },
        };
        expect(ArticleDetailsSelectors.getArticleCommentsIsLoading(state as IStateSchema)).toEqual(false);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(ArticleDetailsSelectors.getArticleCommentsIsLoading(state as IStateSchema)).toEqual(false);
    });
});
