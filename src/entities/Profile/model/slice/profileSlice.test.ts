import {
    IProfileSchema,
    profileActions,
    profileReducer,
    updateProfileData,
    ValidateProfileError,
} from 'entities/Profile';
import {IProfile} from 'entities/Profile/model/types/IProfile';
import {Country} from 'entities/Country';

const mockData: IProfile = {
    'first': 'Alex',
    'lastname': 'Sadykov',
    'age': 23,
    'city': 'Saint-Petersburg',
    'username': 'Darlingg',
    'avatar': 'https://i.imgur.com/IyES7O4.png',
    'country': Country.RUSSIA,
};

describe('testing profileSlice functional', () => {
    test('test set readonly', () => {
        const state: DeepPartial<IProfileSchema> = {
            readonly: true,
        };
        expect(profileReducer(state as IProfileSchema, profileActions.setReadonly(false)))
            .toEqual({
                readonly: false,
            });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<IProfileSchema> = {data: mockData, form: {...mockData, username: 'no name'}};
        expect(profileReducer(state as IProfileSchema, profileActions.cancelEdit())).
            toEqual({
                data: mockData,
                form: mockData,
                readonly: true,
                validateErrors: undefined,
            });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state as IProfileSchema, updateProfileData.pending)).
            toEqual({
                isLoading: true,
                validateError: undefined,
            });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(state as IProfileSchema, updateProfileData.fulfilled(mockData, ''))).
            toEqual({
                isLoading: false,
                validateError: undefined,
                readonly: true,
                form: mockData,
                data: mockData,
            });
    });
});
