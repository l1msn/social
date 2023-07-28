import {IStateSchema} from 'app/providers/StoreProvider';
import getArticleIsLoading from './getArticleIsLoading';

describe('testing getArticleIsLoading functional', () => {
    test('return data', () => {
        const state: DeepPartial<IStateSchema> = {
            article: {
                isLoading: false,
            },
        };
        expect(getArticleIsLoading(state as IStateSchema)).toEqual(false);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticleIsLoading(state as IStateSchema)).toEqual(false);
    });
});
