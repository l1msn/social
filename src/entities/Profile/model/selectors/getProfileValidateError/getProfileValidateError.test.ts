import {IStateSchema} from 'app/providers/StoreProvider';
import getProfileValidateError from './getProfileValidateError';
import {ValidateProfileError} from 'entities/Profile';

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
