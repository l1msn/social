import axios from 'axios';
import TestAsyncThunk from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import {IProfile} from '../../types/IProfile';
import fetchProfileData from './fetchProfileData';


jest.mock('axios');

const mockedAxios = jest.mocked(axios, {
    shallow: false,
});

const mockData: IProfile = {
    'first': 'Alex',
    'lastname': 'Sadykov',
    'age': 23,
    'city': 'Saint-Petersburg',
    'username': 'Darlingg',
    'avatar': 'https://i.imgur.com/IyES7O4.png',
};

describe('testing fetchProfileData functional', () => {
    test('success fetch data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({data: mockData}));

        const result = await thunk.callThunk(1);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockData);
    });

    test('403 error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
