import {IStateSchema} from '@/app/providers/StoreProvider';
import getLoginUsername from './getLoginUsername';

describe('testing getLoginUsername functional', () => {
    test('return username', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                username: 'asd',
            },
        };
        expect(getLoginUsername(state as IStateSchema)).toEqual('asd');
    });

    test('with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getLoginUsername(state as IStateSchema)).toEqual('');
    });
});
