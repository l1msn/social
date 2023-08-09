import axios from 'axios';
import TestAsyncThunk from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import {Country} from '@/entities/Country';
import updateProfileData from './updateProfileData';
import {IProfile} from '../../../../../entities/Profile/model/types/IProfile';
import {ValidateProfileError} from '@/features/editableProfileCard/model/types/editableProfileCardSchema';


jest.mock('axios');

const mockedAxios = jest.mocked(axios, {
    shallow: false,
});

const mockForm: IProfile = {
    'id': 1,
    'first': 'Alex',
    'lastname': 'Sadykov',
    'age': 23,
    'city': 'Saint-Petersburg',
    'username': 'Darlingg',
    'avatar': 'https://i.imgur.com/IyES7O4.png',
    'country': Country.RUSSIA,
};

describe('testing fetchProfileData functional', () => {
    test('success update data from form', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: mockForm,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({data: mockForm}));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockForm);
    });

    test('403 error login', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: mockForm,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });
});
