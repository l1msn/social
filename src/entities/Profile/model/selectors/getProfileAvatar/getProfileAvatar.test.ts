import {IStateSchema} from 'app/providers/StoreProvider';
import getProfileAvatar from './getProfileAvatar';

const mockAvatar: string = 'url avatar';

describe('testing getProfileAvatar functional', () => {
    test('return avatar', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                data: {
                    avatar: mockAvatar,
                },
            },
        };
        expect(getProfileAvatar(state as IStateSchema)).toEqual(mockAvatar);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileAvatar(state as IStateSchema)).toEqual('');
    });
});
