import {IStateSchema} from 'app/providers/StoreProvider';
import getProfileReadonly from './getProfileReadonly';

const mockReadonly: boolean = true;

describe('testing getProfileReadonly functional', () => {
    test('return readonly', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                readonly: mockReadonly,
            },
        };
        expect(getProfileReadonly(state as IStateSchema)).toEqual(mockReadonly);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileReadonly(state as IStateSchema)).toEqual(false);
    });
});
