import {IStateSchema} from '@/app/providers/StoreProvider';
import ProfileSelectors from './ProfileSelectors';
import {IProfile} from '@/entities/Profile';
import {ValidateProfileError} from '../types/editableProfileCardSchema';

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
        expect(ProfileSelectors.getProfileData(state as IStateSchema)).toEqual(mockData);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(ProfileSelectors.getProfileData(state as IStateSchema)).toEqual({});
    });
});

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
        expect(ProfileSelectors.getProfileAvatar(state as IStateSchema)).toEqual(mockAvatar);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(ProfileSelectors.getProfileAvatar(state as IStateSchema)).toEqual('');
    });
});

const mockError: string = 'error here!';

describe('testing getProfileError functional', () => {
    test('return error', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                error: mockError,
            },
        };
        expect(ProfileSelectors.getProfileError(state as IStateSchema)).toEqual(mockError);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(ProfileSelectors.getProfileError(state as IStateSchema)).toEqual('');
    });
});

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
        expect(ProfileSelectors.getProfileForm(state as IStateSchema)).toEqual(mockForm);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(ProfileSelectors.getProfileForm(state as IStateSchema)).toEqual({});
    });
});


const mockLoading: boolean = true;

describe('testing getProfileIsLoading functional', () => {
    test('return loading', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                isLoading: mockLoading,
            },
        };
        expect(ProfileSelectors.getProfileIsLoading(state as IStateSchema)).toEqual(mockLoading);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(ProfileSelectors.getProfileIsLoading(state as IStateSchema)).toEqual(false);
    });
});

const mockReadonly: boolean = true;

describe('testing getProfileReadonly functional', () => {
    test('return readonly', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                readonly: mockReadonly,
            },
        };
        expect(ProfileSelectors.getProfileReadonly(state as IStateSchema)).toEqual(mockReadonly);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(ProfileSelectors.getProfileReadonly(state as IStateSchema)).toEqual(false);
    });
});

const mockValidateErrors: ValidateProfileError[] = [
    ValidateProfileError.INCORRECT_AGE,
    ValidateProfileError.INCORRECT_COUNTRY,
];

describe('testing getProfileValidateError functional', () => {
    test('return validate errors', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                validateError: mockValidateErrors,
            },
        };
        expect(ProfileSelectors.getProfileValidateError(state as IStateSchema)).toEqual(mockValidateErrors);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(ProfileSelectors.getProfileValidateError(state as IStateSchema)).toEqual([]);
    });
});
