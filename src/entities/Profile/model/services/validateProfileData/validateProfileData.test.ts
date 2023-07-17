import validateProfileData from './validateProfileData';
import {IProfile, ValidateProfileError} from 'entities/Profile/model/types/IProfile';
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

describe('testing validateProfileData functional', () => {
    test('success validate', async () => {
        const result = validateProfileData(mockData);

        expect(result).toEqual([]);
    });

    test('error validate', async () => {
        const result = validateProfileData({
            ...mockData, age: -1,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
});
