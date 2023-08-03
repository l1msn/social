import {IStateSchema} from 'app/providers/StoreProvider';
import {IProfile} from '../../types/IProfile';
import getProfileData from './getProfileData';

const mockData: IProfile = {
    'first': 'Alex',
    'lastname': 'Sadykov',
    'age': 23,
    'city': 'Saint-Petersburg',
    'username': 'Darlingg',
    'avatar': 'https://i.imgur.com/IyES7O4.png',
};

describe('testing getProfileData functional', () => {
    test('return data', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                data: mockData,
            },
        };
        expect(getProfileData(state as IStateSchema)).toEqual(mockData);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileData(state as IStateSchema)).toEqual({});
    });
});
