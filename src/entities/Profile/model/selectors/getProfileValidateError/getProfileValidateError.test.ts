import {IStateSchema} from 'app/providers/StoreProvider';
import {ValidateProfileError} from '../../types/IProfile';
import getProfileValidateError from './getProfileValidateError';

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
        expect(getProfileValidateError(state as IStateSchema)).toEqual(mockValidateErrors);
    });

    test('return empty', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileValidateError(state as IStateSchema)).toEqual([]);
    });
});
