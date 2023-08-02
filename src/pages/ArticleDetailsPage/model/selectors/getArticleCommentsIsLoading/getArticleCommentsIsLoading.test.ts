import {IStateSchema} from 'app/providers/StoreProvider';
import getArticleCommentsIsLoading from './getArticleCommentsIsLoading';

describe('testing getArticleCommentsIsLoading functional', () => {
    test('return data', () => {
        const state: DeepPartial<IStateSchema> = {
            articleDetailsPage: {
                comments: {
                    isLoading: false,
                },
            },
        };
        expect(getArticleCommentsIsLoading(state as IStateSchema)).toEqual(false);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticleCommentsIsLoading(state as IStateSchema)).toEqual(false);
    });
});
