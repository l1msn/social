import {IProfile, ValidateProfileError} from '../../types/IProfile';

function validateProfileData(profile: IProfile) {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {first, lastname, age, country} = profile;

    const errors: ValidateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age) || age < 0) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
}

export default validateProfileData;
