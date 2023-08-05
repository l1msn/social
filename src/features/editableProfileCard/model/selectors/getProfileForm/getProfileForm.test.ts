import {IStateSchema} from 'app/providers/StoreProvider';
import {IProfile} from '../../../../../entities/Profile/model/types/IProfile';
import getProfileForm from './getProfileForm';

const mockForm: IProfile = {
    'first': 'Alex',
    'lastname': 'Sadykov',
    'age': 23,
    'city': 'Saint-Petersburg',
    'username': 'Darlingg',
    'avatar': 'https://i.imgur.com/IyES7O4.png',
};

describe('testing getProfileForm functional', () => {
    test('return form', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                form: mockForm,
            },
        };
        expect(getProfileForm(state as IStateSchema)).toEqual(mockForm);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileForm(state as IStateSchema)).toEqual({});
    });
});
