import {IStateSchema} from '@/app/providers/StoreProvider';
import getArticleError from './getArticleError';

describe('testing getArticleError functional', () => {
    test('return data', () => {
        const state: DeepPartial<IStateSchema> = {
            article: {
                error: 'error',
            },
        };
        expect(getArticleError(state as IStateSchema)).toEqual('error');
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticleError(state as IStateSchema)).toEqual('');
    });
});
