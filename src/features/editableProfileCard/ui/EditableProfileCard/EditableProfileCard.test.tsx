import {screen} from '@testing-library/react';
import EditableProfileCard from './EditableProfileCard';
import componentRender from '@/shared/lib/tests/componentRender/componentRender';
import {IProfile} from '@/entities/Profile';
import {Country} from '@/entities/Country';
import {Currency} from '@/entities/Currency';
import {profileReducer} from '../../model/slice/profileSlice';
import userEvent from '@testing-library/user-event';
import $api from '@/shared/api/api';

const mockData: IProfile = {
    'id': '2',
    'first': 'Alex',
    'lastname': 'Sadykov',
    'age': 23,
    'city': 'Saint-Petersburg',
    'country': Country.RUSSIA,
    'currency': Currency.RUB,
    'username': 'Darlingg',
    'avatar': 'https://i.imgur.com/IyES7O4.png',
};

const mockOptions = {
    initialState: {
        profile: {
            data: mockData,
            readonly: true,
            form: mockData,
        },
        user: {
            authData: {id: 2, username: 'Darlingg'},
        },
    },
    asyncReducers: {profile: profileReducer},
};

describe('EditableProfileCard component test', (): void => {
    test('Check save and cancel buttons', async (): Promise<void> => {
        componentRender(<EditableProfileCard id={'1'} />, mockOptions);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCardHeader.SaveButton')).toBeInTheDocument();
    });

    test('Check back to old form after clicking cancel button', async (): Promise<void> => {
        componentRender(<EditableProfileCard id={'1'} />, mockOptions);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'new firstname');
        await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'new lastname');

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('new firstname');
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('new lastname');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('Alex');
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('Sadykov');
        expect(screen.getByTestId('EditableProfileCardHeader.EditButton')).toBeInTheDocument();
    });

    test('Validation error', async (): Promise<void> => {
        componentRender(<EditableProfileCard id={'1'} />, mockOptions);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Success put new profile data', async (): Promise<void> => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id={'1'} />, mockOptions);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'new firstname');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
