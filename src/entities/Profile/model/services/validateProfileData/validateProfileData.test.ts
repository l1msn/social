import validateProfileData from './validateProfileData';
import {Country} from 'entities/Country';
import {IProfile, ValidateProfileError} from '../../types/IProfile';

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
