import {IStateSchema} from '@/app/providers/StoreProvider';
import getProfileError from './getProfileError';

const mockError: string = 'error here!';

describe('testing getProfileError functional', () => {
    test('return error', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                error: mockError,
            },
        };
        expect(getProfileError(state as IStateSchema)).toEqual(mockError);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileError(state as IStateSchema)).toEqual('');
    });
});
