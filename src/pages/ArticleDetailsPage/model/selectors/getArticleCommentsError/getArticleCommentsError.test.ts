import {IStateSchema} from '@/app/providers/StoreProvider';
import getArticleCommentsError from './getArticleCommentsError';

describe('testing getArticleCommentsError functional', () => {
    test('return data', () => {
        const state: DeepPartial<IStateSchema> = {
            articleDetailsPage: {
                comments: {
                    error: 'error',
                },
            },
        };
        expect(getArticleCommentsError(state as IStateSchema)).toEqual('error');
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticleCommentsError(state as IStateSchema)).toEqual('');
    });
});
