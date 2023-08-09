import {IStateSchema} from '@/app/providers/StoreProvider';
import getProfileIsLoading from './getProfileIsLoading';

const mockLoading: boolean = true;

describe('testing getProfileIsLoading functional', () => {
    test('return loading', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                isLoading: mockLoading,
            },
        };
        expect(getProfileIsLoading(state as IStateSchema)).toEqual(mockLoading);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileIsLoading(state as IStateSchema)).toEqual(false);
    });
});
