import {IStateSchema} from 'app/providers/StoreProvider';
import getLoginIsLoading from './getLoginIsLoading';

describe('testing getLoginIsLoading functional', () => {
    test('return isLoading', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as IStateSchema)).toEqual(true);
    });

    test('with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getLoginIsLoading(state as IStateSchema)).toEqual(false);
    });
});
